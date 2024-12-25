/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Button,
  Box,
  TextField,
  Grid2,
  Typography,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Loader } from "@/components/Loader";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import Image from "next/image";
import PublicHeader from "@/PageComponents/components/PublicHeader";

interface Values {
  fullName: string;
}

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useCustomRouter();
  const formik = useFormik<Values>({
    initialValues: {
      fullName: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, "Please Enter Valid Name")
        .required("Please Enter Your Full Name"),
    }),
    onSubmit: async (values) => {
      // onSignInSubmit(values.otp);
      //submit api call which gets userId ,payload is otp and mobile Number
      try {
        const payload = {
          ...values,
        };
        // const response=await getUserIDApi(payload)
        const response = { userID: "DD-USER000001" };
        toast.success("Registration Successfull");
        router.push(`/docListPage?userID=${response.userID}`);
      } catch {
        toast.error("unable to fetch user");
      }
    },
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box>
      <PublicHeader />
      <Grid2 container>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{ height: "100vh", display: "flex", alignItems: "end" }}
        >
          <Image
            src={"/assets/registrationBanner.png"}
            alt={""}
            height={500}
            width={500}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: "#00004f",
                      marginBottom: 2,
                    }}
                  >
                    New User!
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#555",
                      fontSize: "1rem",
                      marginBottom: 3,
                    }}
                  >
                    Sign Up for Dynamodocs
                  </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    fullWidth
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!formik.errors.fullName && formik.touched.fullName}
                    helperText={
                      formik.touched.fullName ? formik.errors.fullName : ""
                    }
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Register
                    </Button>
                  </Box>
                </Grid2>
              </Grid2>
            </form>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default RegistrationForm;
