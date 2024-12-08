// import InputForm from "@/PageComponents/components/InputForm";
import { useParams } from "@/customHooks/useParams";
import Header from "@/PageComponents/components/Header";
import { getForm } from "@/utils";
import { Box } from "@mui/material";
import React from "react";

const FormPage = () => {
  const { documentType } = useParams();
  return (
    <Box>
      <Header />
      <Box
        sx={{
          backgroundColor: "#00004f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          pt: { xs: 8, sm: 1 },
        }}
      >
        {/* pass the documentType to get inputForms different documentType could have same InputForm */}
        {getForm(documentType)}
      </Box>
    </Box>
  );
};
export default FormPage;
