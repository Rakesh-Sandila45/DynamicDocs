/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { firebaseAuth } from "@/pages/_app";
import { Button, Box, TextField, Grid2 } from "@mui/material";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Loader } from "@/components/Loader";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import axios from "axios";
import { setAuthToken } from "@/axios";
import { loginApi } from "@/apiData/api";

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

interface Values {
  mobile: string;
  otp: string;
}

export function LoginComponent() {
  const [mobileVerified, setMobileVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useCustomRouter();
  const formik = useFormik<Values>({
    initialValues: {
      mobile: "",
      otp: "",
    },
    validationSchema: Yup.object().shape({
      mobile: Yup.string()
        .min(10, "Mobile Number should contain 10 digits")
        .max(10, "Mobile Number must be 10 digits")
        .required("Please Enter Mobile Number"),
      otp: Yup.string()
        .min(6, "OTP must be 6 digits")
        .required("Please Enter OTP"),
    }),
    onSubmit: async (values) => {
      // onSignInSubmit(values.otp);
      setIsLoading(true);
      try {
        const payload = {
          mobile: values.mobile,
        };
        const response = await loginApi(payload);
        // const response = {
        //   userType: "Customer",
        //   isExistingUser: true,
        // }; //userType=='Admin'
        if (response.userType == "Admin") {
          toast.success("Admin Login Successfull");
          router.push(
            `/addDocuments?adminMobile=${values.mobile}&userType=${response.userType}`
          );
        } else if (response.userType == "Customer" && response.isExistingUser) {
          toast.success("Login Successfull");
          router.push(
            `/docListPage?mobile=${values.mobile}&&userType=${response.userType}`
          );
        } else if (!response.isExistingUser) {
          router.push(`/registerForm?mobile=${values.mobile}`);
        }
      } catch {
        toast.error("unable to fetch user");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const sendOTP = (m: string) => {
    setIsLoading(true);
    const appVerifier = window.recaptchaVerifier;
    // if (!appVerifier) {
    //   toast.error("Recaptcha is not initialized.");
    //   return;
    // }
    signInWithPhoneNumber(firebaseAuth, `+91${m}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to send OTP: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("mobile", event.target.value, false);
    if (event.target.value.length === 10) {
      sendOTP(event.target.value);
    } else {
      setMobileVerified(false);
      formik.setFieldValue("otp", "");
    }
  };
  const onOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("otp", event.target.value, false);
    setMobileVerified(false);
    if (event.target.value.length === 6) {
      if (window.confirmationResult) {
        // event.target.value.length === 6;
        setIsLoading(true);
        window.confirmationResult
          .confirm(event.target.value)
          .then((result: any) => {
            const user = result.user;
            toast.success("Your Mobile Is Verified");
            setMobileVerified(true);
          })
          .catch((error: any) => {
            toast.error("Invalid OTP!");
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        toast.error("Confirmation result is not set.");
      }
    }
  };
  // const setRecaptch = () => {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       firebaseAuth,
  //       "recaptcha", // DOM element ID.
  //       {
  //         size: "invisible", // 'invisible' for auto-validation.
  //         callback: (response:any) => {
  //           console.log("Recaptcha verified:", response);
  //         },
  //         "expired-callback": () => {
  //           console.warn("Recaptcha expired. Resetting verifier.");
  //         },
  //       },

  //     );
  //   }
  // };
  const setRecaptch = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      firebaseAuth,
      "recaptcha",
      {
        size: "invisible",
        callback: () => {},
      }
    );
  };
  useEffect(() => {
    setRecaptch();
    formik.validateForm();
  }, []);

  // const apicall = async () => {
  //   const response = await axios.get("/api/hello");
  //   console.log(response.data);
  // };
  useEffect(() => {
    // apicall();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setAuthToken("");
      })
      .catch((error) => {
        console.log("Unable to sign out", error);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            id="mobile"
            label="Mobile Number"
            placeholder="Mobile Number"
            type="number"
            name="mobile"
            fullWidth
            value={formik.values.mobile}
            onChange={onMobileNumberChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.mobile && formik.touched.mobile}
            helperText={formik.touched.mobile ? formik.errors.mobile : ""}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #000000",
                borderRadius: "5px",
              },
              "& .Mui-disabled": {
                backgroundColor: "transparent !important",
              },
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            id="otp"
            name="otp"
            label="OTP"
            type="number"
            placeholder="Enter OTP"
            fullWidth
            value={formik.values.otp}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #000000",
                borderRadius: "5px",
              },
              "& .Mui-disabled": {
                backgroundColor: "transparent !important",
              },
            }}
            onChange={onOTPChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.otp && formik.touched.otp}
            helperText={formik.touched.otp ? formik.errors.otp : ""}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Box>
            <Button
              variant="contained"
              size="large"
              color="primary"
              id="login-submit"
              type="submit"
              fullWidth
              disabled={!mobileVerified}
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              id="recaptcha"
              sx={{ display: "none" }}
            >
              Dummy
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </form>
  );
}
