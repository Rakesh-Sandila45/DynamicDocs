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
  Divider,
  Typography,
  Grid2,
} from "@mui/material";
import { toast } from "react-toastify";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import Header from "@/PageComponents/components/Header";
import Image from "next/image";
import { getDocumentsNameApi } from "@/apiData/api";
import { useParams } from "@/customHooks/useParams";
import { Loader } from "@/components/Loader";

const DocumentsList = () => {
  const [documentList, setDocumentList] = useState<any>([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mobile } = useParams();
  const router = useCustomRouter();
  const formik = useFormik({
    initialValues: {
      documentType: "",
    },
    validationSchema: Yup.object({
      documentType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const formattedDocumentType = values.documentType.replace(/\s+/g, "");
      router.push(
        `/inputFormPage?mobile=${mobile}&documentType=${formattedDocumentType}`
      );
    },
  });
  const getTotalFormTypes = async () => {
    setIsLoading(true);
    try {
      const response = await getDocumentsNameApi(mobile);
      if (response.documents) {
        setIsFetched(true);
        setDocumentList(response.documents);
      }
    } catch {
      setIsFetched(false);
      toast.error("Unable to fetch Document List");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (mobile) getTotalFormTypes();
  }, [mobile]);

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
            src={"/assets/documentListBanner.png"}
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
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isFetched ? (
              <Box>
                <Typography
                  variant="h4"
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
                  sx={{
                    fontSize: "1rem",
                    marginBottom: 3,
                  }}
                >
                  Please select the document to Generate PDF File
                </Typography>
              </Box>
            ) : (
              <Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: "primary.main",
                    marginBottom: 2,
                  }}
                >
                  Looks like there are no documents yet
                  <br />
                  However you can have a you can continue by choosing demo
                  document
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
              </Box>
            )}
            <Divider
              variant="middle"
              sx={{
                marginBottom: 3,
                borderColor: "#ddd",
                maxWidth: "400px",
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
                    fontSize: { xs: "25px", sm: "30px" },
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
                  {documentList.map((item: string, index: any) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: { xs: "20px", sm: "30px" },
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
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default DocumentsList;
