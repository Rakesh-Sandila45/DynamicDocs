import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid2,
  Container,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PdfCard from "./PDFGenerator";
import dayjs from "dayjs";
import { useParams } from "@/customHooks/useParams";

const Template = () => {
  const [data, setData] = useState<any>({});
  const [open, setOpen] = React.useState(false);
  const { documentType } = useParams();

  const formik = useFormik({
    initialValues: {
      documentName: "Rakesh Sandila Offer Letter",
      name: "Rakesh Sandila",
      // offerGeneratedDate: "14-11-2024",
      jobLocation: "Hyderabad",
      designation: "Associate Software Engineer",
      ctc: "500000",
      // offerOpenUntill: "13-11-2024",
      // reportingDate: "13-11-2024",
      // name: "",
      offerGeneratedDate: "",
      // jobLocation: "",
      // designation: "",
      // ctc: "",
      offerOpenUntill: "",
      reportingDate: "",
    },

    validationSchema: yup.object({
      documentName: yup
        .string()
        .required("Please Enter Employee Full Name")
        .min(3, "Please Enter valid Name")
        .max(35, ""),
      name: yup
        .string()
        .required("Please Enter Employee Full Name")
        .min(3, "Please Enter valid Name")
        .max(35, ""),
      offerGeneratedDate: yup.string().required("Please Select Date"),
      jobLocation: yup
        .string()
        .required("Please Enter Job Location")
        .min(3, "Please Enter valid Location")
        .max(35, ""),
      designation: yup
        .string()
        .required("Please Enter Designation")
        .min(3, "Please Enter valid Designation")
        .max(35, ""),
      ctc: yup.number().required("Please Enter CTC"),
      offerOpenUntill: yup.string().required("Please Select Date"),
      reportingDate: yup.string().required("Please Select Date"),
    }),

    onSubmit: (values) => {
      setData(values);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    formik.validateForm();
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: 5,
        borderRadius: 4,
        p:2,
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },mt:3
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: "primary.main",
        }}
      >
        Offer Letter Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={2} sx={{ mt: 5, p: 5 }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              id="documentName"
              name="documentName"
              label="Enter Document Name"
              fullWidth
              value={formik.values.documentName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.documentName &&
                Boolean(formik.errors.documentName)
              }
              helperText={
                formik.touched.documentName && formik.errors.documentName
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              id="name"
              name="name"
              label="Full Name(As Per Aadhaar)"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Offer Generated Date *"
                sx={{ width: "100%" }}
                format="DD-MM-YYYY"
                // fullWidth
                value={dayjs(formik.values.offerGeneratedDate, "DD-MM-YYYY")}
                onChange={(date) => {
                  formik.setFieldValue(
                    "offerGeneratedDate",
                    date?.format("DD-MM-YYYY")
                  );
                }}
                slotProps={{
                  textField: {
                    name: "offerGeneratedDate",
                    error:
                      !!formik.errors.offerGeneratedDate &&
                      !!formik.touched.offerGeneratedDate,
                    onBlur: formik.handleBlur,
                    helperText: formik.touched.offerGeneratedDate
                      ? formik.errors.offerGeneratedDate
                      : "",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              id="jobLocation"
              name="jobLocation"
              label="Enter Job Location"
              required
              fullWidth
              value={formik.values.jobLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.jobLocation && Boolean(formik.errors.jobLocation)
              }
              helperText={
                formik.touched.jobLocation && formik.errors.jobLocation
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              id="designation"
              name="designation"
              label="Enter Designation"
              required
              fullWidth
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.designation && Boolean(formik.errors.designation)
              }
              helperText={
                formik.touched.designation && formik.errors.designation
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Enter CTC"
              type="number"
              id="ctc"
              name="ctc"
              required
              fullWidth
              value={formik.values.ctc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.ctc && Boolean(formik.errors.ctc)}
              helperText={formik.touched.ctc && formik.errors.ctc}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Offer Open Untill"
                sx={{ width: "100%" }}
                format="DD-MM-YYYY"
                value={dayjs(formik.values.offerOpenUntill, "DD-MM-YYYY")}
                onChange={(date) => {
                  formik.setFieldValue(
                    "offerOpenUntill",
                    date?.format("DD-MM-YYYY")
                  );
                }}
                slotProps={{
                  textField: {
                    name: "offerOpenUntill",
                    error:
                      !!formik.errors.offerOpenUntill &&
                      !!formik.touched.offerOpenUntill,
                    onBlur: formik.handleBlur,
                    helperText: formik.touched.offerOpenUntill
                      ? formik.errors.offerOpenUntill
                      : "",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Reporting Date"
                sx={{ width: "100%" }}
                format="DD-MM-YYYY"
                value={dayjs(formik.values.reportingDate, "DD-MM-YYYY")}
                onChange={(date) => {
                  formik.setFieldValue(
                    "reportingDate",
                    date?.format("DD-MM-YYYY")
                  );
                }}
                slotProps={{
                  textField: {
                    name: "reportingDate",
                    error:
                      !!formik.errors.reportingDate &&
                      !!formik.touched.reportingDate,
                    onBlur: formik.handleBlur,
                    helperText: formik.touched.reportingDate
                      ? formik.errors.reportingDate
                      : "",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 size={12}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Grid2>
        </Grid2>
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {/* {`${data.name} OfferLetter 30 November 2024`} */}
              Document Name({data?.documentName})
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <PdfCard values={data} documentType={documentType} />
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </form>
    </Container>
  );
};
export default Template;
