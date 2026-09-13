/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Text,
  View,
  Page,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import { efundzzCtcBreakUp } from "../utils";
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xIIzc.ttf",
      fontStyle: "italic",
    },
  ],
});
const OfferLetter = (props: any) => {
  const { values } = props;
  const formatter = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0, // No decimals
  });

  const styles = StyleSheet.create({
    page: {
      paddingLeft: 15,
      paddingRight: 5,
      paddingBottom: 20,
      paddingTop: 20,
      fontSize: 10,
      lineHeight: 1.5,
      marginTop: 10,
      textAlign: "justify",
    },
    section: {
      marginBottom: 12,
      marginLeft: 50,
      marginRight: 50,
    },
    header: {
      fontSize: 12,
      // marginBottom: 20,
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: "bold",
      textDecoration: "underline",
      // marginTop: 20,
    },
    paragraph: {
      marginBottom: 10,
    },
    signature: {
      height: 50,
      width: 200,
    },
    footer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 15,
    },
    boldtext: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    logo: {
      height: 24,
      width: 140,
    },
    enclosure: {
      marginTop: 20,
    },
    tableContainer: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50,
    },
    tableHeader: {
      fontFamily: "Roboto",
      flexDirection: "row",
      fontWeight: 700,
      border: "1px solid #000",
      fontSize: 10,
    },
    tableRow: {
      flexDirection: "row",
      borderLeft: "1px solid #000",
      borderRight: "1px solid #000",
      borderBottom: "1px solid #000",
    },
    col1: {
      width: "60%",
      borderRight: "1px solid #000",
      paddingLeft: "5px",
    },
    col2: {
      width: "20%",
      textAlign: "right",
      borderRight: "1px solid #000",
      paddingLeft: "5px",
    },
    col3: {
      width: "20%",
      textAlign: "right",
      paddingLeft: "5px",
    },
    documentsList: {
      marginTop: 20,
      marginLeft: 50,
      marginRight: 50,
    },
    listItem: {
      marginBottom: 1,
      fontSize: 10,
    },
    footerLogo: {
      height: 20,
      width: 15,
    },
    // pageNumber: {
    //   fontSize: 10,
    //   textAlign: "center",
    //   color: "grey",
    // position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 15,
    // },
    footerIconBox: {
      display: "flex",
      alignItems: "center",
      width: "25%",
    },
  });
  const ctcBreakdown = efundzzCtcBreakUp(values.ctc);

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={[styles.section, { marginBottom: "10px" }]}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={styles.footerIconBox}>
              <Image src="/icons/locationIcon.png" style={styles.footerLogo} />
              <Text
                style={{
                  fontSize: "8px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                2nd Floor, Patancheru Near Westin Hotel,502296 BeeramGuda,
                Hyderabad
              </Text>
            </View>
            <View style={styles.footerIconBox}>
              <Image src="/icons/phoneIcon.png" style={styles.footerLogo} />
              <Text
                style={{
                  fontSize: "8px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                +91-9705-359982
              </Text>
            </View>
            <View style={styles.footerIconBox}>
              <Image src="/icons/mailIcon.png" style={styles.footerLogo} />
              <Text
                style={{
                  fontSize: "8px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                hr@dynamicDocs.com
              </Text>
            </View>
            <View style={styles.footerIconBox}>
              <Image src="/icons/searchIcon.png" style={styles.footerLogo} />
              <Text
                style={{
                  fontSize: "8px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                www.dynamicdocs.com
              </Text>
            </View>
          </View>
        </View>
        {/* <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} of ${totalPages}`
            }
            fixed
          /> */}

        <Text
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "#000",
          }}
          fixed
        ></Text>
      </View>
    );
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          {/* <Image src="/vercel.svg" style={styles.logo} /> */}
          <Text
            style={{
              height: 40,
              width: 200,
              backgroundColor: "#000",
              color: "#FFF",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: 600,
            }}
          >
            Your Logo
          </Text>
        </View>
        <View style={styles.section}>
          <Text>{values.offerGeneratedDate}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Offer Letter</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ marginBottom: 10 }}>
            Dear <Text style={styles.boldtext}>{values.name},</Text>
          </Text>
          <Text style={styles.paragraph}>
            It gives us immense pleasure in inviting you to join “dynamicDocs
            Technical Services Private Limited.” as one of its valuable members.
            We strongly believe that all our employees are truly our Associates.
            We are happy that you are one such associate joining us in our
            effort to create a true corporation. You will be working at the
            location <Text style={styles.boldtext}> “dynamicDocs”</Text> office{" "}
            <Text style={styles.boldtext}> {values.jobLocation}.</Text>
          </Text>
          <Text style={styles.paragraph}>
            You will be designated as{" "}
            <Text style={styles.boldtext}>
              {" "}
              {'"'}
              {values.designation}
              {'"'}{" "}
            </Text>{" "}
            and your Cost to the Company (CTC) is
            <Text style={styles.boldtext}>
              {" "}
              Rs.{formatter.format(values.ctc)}/
            </Text>
            -per Annum. This Offer is Valid Subjective to BGV Clearance.
          </Text>
          <Text style={styles.paragraph}>
            We will have the offer open until{" "}
            <Text style={styles.boldtext}>{values.offerOpenUntill}</Text> EOD to
            let us know your acceptance of this offer and Prefer you to join us
            and report to the office by 10 AM on{" "}
            <Text style={styles.boldtext}>{values.reportingDate}.</Text>
          </Text>
          <Text style={styles.paragraph}>
            This offer is subject to a satisfactory reference check of your
            credentials being conducted by the company, covering your
            educational qualifications, document verification, and
            authentication, previous experience, etc..,.Your formal Appointment
            Letter will be issued to you within a week of your joining.
          </Text>
          <Text style={styles.paragraph}>
            Your association and employment will be governed by the Code of
            Conduct and various associate related policies and guidelines of the
            organization.
          </Text>
          <Text style={styles.paragraph}>
            We welcome you and are delighted that you have chosen to be part of
            our team. We hope your association with us will be mutually
            beneficial, pleasant and fulfilling. While welcoming you to
            dynamicDocs, we are confident that you will contribute to the
            organization and its goals, add value through your efforts and
            strengthen dynamicDocs.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>Yours truly,</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ marginBottom: 5 }}>
            For dynamicDocs Technical Services Private Limited
          </Text>
          {/* <Image src="/icons/signature.png" style={styles.signature} /> */}
          {/* <Image src="/vercel.svg" style={styles.logo} /> */}
        </View>
        <View style={styles.section}>
          <Text>Authorized Signatory</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.boldtext}>Enclosures:</Text>
          <Text>1. CTC break-up</Text>
          <Text>2. List of documents - Checklist</Text>
        </View>
        <Footer />
      </Page>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginBottom: 10,
          }}
        >
          {/* <Image src="/vercel.svg" style={styles.logo} /> */}
          <Text
            style={{
              height: 40,
              width: 200,
              backgroundColor: "#000",
            }}
          ></Text>
        </View>
        <View style={styles.tableContainer}>
          <Text style={[styles.boldtext, { marginBottom: 10 }]}>
            <Text style={{ textDecoration: "underline" }}> Annexure-1:</Text>{" "}
            CTC break-up
          </Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.col1, { textAlign: "center" }]}>
              Components
            </Text>
            <Text style={styles.col2}>Per Month in Rs.</Text>
            <Text style={styles.col3}>Annualized in Rs.</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col1}>Basic</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyBasicSalary)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyBasicSalary)}.00
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.col1}>HRA</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyHRA)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyHRA)}.00
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.col1}>Medical Allowance</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyMedicalAllowance)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyMedicalAllowance)}.00
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.col1}>Transport Allowance</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.transportAllowanceMonthly)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.transportAllowanceYearly)}.00
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.col1}>Company{"'"}s Contribution to EPF</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyCompanyContributionToEPF)}
              .00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyCompanyContributionToEPF)}.00
            </Text>
          </View>
          <View style={[styles.tableRow, { borderBottom: "" }]}>
            <Text
              style={[styles.col1, { textAlign: "center", height: 15 }]}
            ></Text>
            <Text style={styles.col2}></Text>
            <Text style={styles.col3}></Text>
          </View>
          <View style={[styles.tableHeader]}>
            <Text style={[styles.col1, { textAlign: "center" }]}>
              Cost to Company (CTC) (I)
            </Text>
            <Text style={styles.col2}>
              {formatter.format(Math.floor(values.ctc / 12))}
            </Text>
            <Text style={styles.col3}>{formatter.format(values.ctc)}</Text>
          </View>
          <View style={[styles.tableRow, { borderBottom: "" }]}>
            <Text
              style={[styles.col1, { textAlign: "center", height: 15 }]}
            ></Text>
            <Text style={styles.col2}></Text>
            <Text style={styles.col3}></Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={[styles.col1, { textAlign: "center" }]}>
              Deductions
            </Text>
            <Text style={styles.col2}></Text>
            <Text style={styles.col3}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col1}>PF (Employee Contribution)</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyPFDeduction)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyPFDeduction)}.00
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col1}>Company{"'"}s Contribution to EPF </Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.monthlyCompanyContributionToEPF)}
              .00{" "}
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.yearlyCompanyContributionToEPF)}.00
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.col1}>Professional Tax</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.professionalTaxMonthly)}.00{" "}
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.professionalTaxYearly)}.00{" "}
            </Text>
          </View>
          <View style={[styles.tableRow, { borderBottom: "" }]}>
            <Text
              style={[styles.col1, { textAlign: "center", height: 15 }]}
            ></Text>
            <Text style={styles.col2}></Text>
            <Text style={styles.col3}></Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={[styles.col1, { textAlign: "center" }]}>Total</Text>
            <Text style={styles.col2}>
              {formatter.format(ctcBreakdown.totalDeductionsMonthly)}.00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(ctcBreakdown.totalDeductionsYearly)}.00
            </Text>
          </View>
          <View style={[styles.tableRow, { borderBottom: "" }]}>
            <Text
              style={[styles.col1, { textAlign: "center", height: 15 }]}
            ></Text>
            <Text style={styles.col2}></Text>
            <Text style={styles.col3}></Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={[styles.col1, { textAlign: "center" }]}>
              Take Home (I-II)
            </Text>
            <Text style={styles.col2}>
              {formatter.format(
                Math.floor(
                  values.ctc / 12 - ctcBreakdown.totalDeductionsMonthly,
                ),
              )}
              .00
            </Text>
            <Text style={styles.col3}>
              {formatter.format(
                values.ctc - ctcBreakdown.totalDeductionsYearly,
              )}
              .00{" "}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.col1, { textAlign: "center" }]}>
              (Subject to TDS as per Provisions of Income Tax Act)
            </Text>
            <Text style={styles.col2}> </Text>
            <Text style={styles.col3}> </Text>
          </View>
        </View>
        {/* Documents Checklist */}
        <View style={styles.documentsList}>
          <Text style={[styles.boldtext, { marginTop: 30 }]}>
            <Text style={{ textDecoration: "underline" }}> Annexure-2:</Text>{" "}
            Documents check-list to be carried on Date of Joining
          </Text>
          <Text style={styles.listItem}>
            1. Passport size colour photograph (4 Nos.).
          </Text>
          <Text style={styles.listItem}>
            2. Academic certificates (for verification).
          </Text>
          <Text style={styles.listItem}>
            3. One set of all the academic certificates (Photocopies).
          </Text>
          <Text style={styles.listItem}>
            4. Photostat copy of passport (if any).
          </Text>
          <Text style={styles.listItem}>5. PAN card - Photocopy.</Text>
        </View>
        {/* <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} of ${totalPages}`
          }
          fixed
        /> */}
        <Footer />
      </Page>
    </Document>
  );
};

export default OfferLetter;
