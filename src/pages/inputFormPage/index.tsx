// import InputForm from "@/PageComponents/components/InputForm";
import { useParams } from "@/customHooks/useParams";
import Header from "@/PageComponents/components/Header";
import { getForm } from "@/utils";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import Image from "next/image";

const FormPage = () => {
  const { documentType } = useParams();
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          m: { xs: "80px 10px 40px 10px", sm: "80px 40px 40px 40px" },
          boxShadow: 5,
          p: 3,
          borderRadius: 5,
        }}
      >
        {/* pass the documentType to get inputForms different documentType could have same InputForm */}
        {getForm(documentType)}
      </Box>
    </Box>
  );
};
export default FormPage;
