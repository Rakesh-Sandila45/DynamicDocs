import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Box,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Container,
  Paper,
  Divider,
  Typography,
} from "@mui/material";
import { useParams } from "@/customHooks/useParams";
import { toast } from "react-toastify";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import Header from "@/PageComponents/components/Header";

const DocumentsList = () => {
  //   const [templateType, setTemplateType] = useState("");
  const [formList, setFormList] = useState<any>([]);
  const { userID } = useParams();
  const router = useCustomRouter();
  const formik = useFormik({
    initialValues: {
      documentType: "",
    },
    validationSchema: Yup.object({
      documentType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      router.push(
        `/inputFormPage?userID=${userID}&documentType=${values.documentType}`
      );
    },
  });
  const getTotalFormTypes = async (userID: any) => {
    try {
      // const payload={
      //   userID:userID
      // }
      // const response = await getFormTypesApi(payload);
      const response = ["Offer Letter", "Termination Letter"];
      setFormList(response);
    } catch {
      toast.error("Unable to fetch formList");
    }
  };
  useEffect(() => {
    getTotalFormTypes(userID);
  }, [userID]);
  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(to right, #00004f,#000 )",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          animation: "fadeIn 1s ease-in-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 4,
              borderRadius: 3,
              background: "#ffffff",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                marginBottom: 2,
              }}
            >
              Your Documnents list
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{
                fontSize: "1rem",
                marginBottom: 3,
              }}
            >
              Please select the document to Generate PDF File
            </Typography>
            <Divider
              sx={{
                marginBottom: 3,
                borderColor: "#ddd",
              }}
            />
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                error={
                  formik.touched.documentType &&
                  Boolean(formik.errors.documentType)
                }
              >
                <FormLabel
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "primary.main",
                    mb: 2,
                  }}
                  id="demo-controlled-radio-buttons-group"
                >
                  Document Type
                </FormLabel>
                <RadioGroup
                  // aria-labelledby="demo-controlled-radio-buttons-group"
                  name="documentType"
                  value={formik.values.documentType}
                  onChange={formik.handleChange}
                >
                  {formList.map((item: string, index: any) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "30px",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
                {formik.touched.documentType && formik.errors.documentType && (
                  <p style={{ color: "red", fontSize: "0.8rem" }}>
                    {formik.errors.documentType}
                  </p>
                )}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, display: "flex", bgcolor: "00004f" }}
                disabled={!formik.isValid}
              >
                Next
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};
export default DocumentsList;
