/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Button,
  Box,
  TextField,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Loader } from "@/components/Loader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PageLayout from "@/layout/PageLayout";
import Header from "@/PageComponents/components/Header";
import Image from "next/image";

interface Values {
  mobile: string;
  documentName: string;
}

function AddDocuments() {
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState<string[]>([]); // Array to hold document names

  const formik = useFormik<Values>({
    initialValues: {
      documentName: "",
      mobile: "",
    },
    validationSchema: Yup.object().shape({
      mobile: Yup.string()
        .min(10, "Mobile Number should contain 10 digits")
        .max(10, "Mobile Number must be 10 digits")
        .required("Please Enter Mobile Number"),
      documentName: Yup.string()
        .min(3, "Please Enter Valid Name")
        .required("Please Enter Your Full Name"),
    }),
    onSubmit: async (values) => {
      const payload = {
        ...values,
        documents,
      };
      console.log("Submitted values:", payload);
      //API to add documents to user
    },
  });

  const handleAddDocumentsField = () => {
    setDocuments([...documents, ""]); // Add an empty document field
  };

  const handleDocumentChange = (index: number, value: string) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index] = value;
    setDocuments(updatedDocuments);
  };

  const handleRemoveDocumentField = (index: number) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  useEffect(() => {
    formik.validateForm();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Header />
      <Grid2
        container
        sx={{ height: "100vh", display: "flex", alignItems: "center " }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{ mt: { xs: 8, sm: 0 } }}>
          <Image
            src={"/assets/addDocumentsBanner.png"}
            alt={""}
            height={500}
            width={500}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              display: "grid",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              px: 8,
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                      marginBottom: 2,
                    }}
                  >
                    Add Documents For The User
                  </Typography>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    id="mobile"
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    type="number"
                    name="mobile"
                    fullWidth
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!formik.errors.mobile && formik.touched.mobile}
                    helperText={
                      formik.touched.mobile ? formik.errors.mobile : ""
                    }
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
                    id="documentName"
                    name="documentName"
                    label="Main Document Name"
                    placeholder="Main Document Name"
                    fullWidth
                    value={formik.values.documentName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      !!formik.errors.documentName &&
                      formik.touched.documentName
                    }
                    helperText={
                      formik.touched.documentName
                        ? formik.errors.documentName
                        : ""
                    }
                  />
                </Grid2>
                {documents.map((doc, index) => (
                  <Grid2 size={{ xs: 12 }} key={index}>
                    <TextField
                      label={`Additional Document ${index + 1}`}
                      placeholder={`Document ${index + 1}`}
                      fullWidth
                      value={doc}
                      onChange={(e) =>
                        handleDocumentChange(index, e.target.value)
                      }
                    />
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemoveDocumentField(index)}
                      sx={{ mt: 1 }}
                    >
                      Remove
                    </Button>
                  </Grid2>
                ))}
                <Grid2 size={{ xs: 12 }}>
                  <Box
                    sx={{
                      border: "1px dashed",
                      height: "30px",
                      minWidth: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 3,
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleAddDocumentsField}
                  >
                    <AddCircleOutlineIcon />
                    <Box ml={1}>Add Document</Box>
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                      disabled={!formik.isValid}
                      fullWidth
                    >
                      Add Documents
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
// AddDocuments.getLayout = function getLayout(page: ReactElement) {
//   return <PageLayout>{page}</PageLayout>;
// };

export default AddDocuments;
