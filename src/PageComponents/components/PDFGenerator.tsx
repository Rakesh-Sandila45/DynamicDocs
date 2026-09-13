import React from "react";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
// import { saveAs } from "file-saver";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { getTemplate } from "@/utils";

const PdfCard = (props: any) => {
  const { values, documentType } = props;
  const pdfKey = React.useMemo(
    () => `${documentType}-${JSON.stringify(values ?? {})}`,
    [documentType, values],
  );
  const pdfDocument = React.useMemo(
    () => getTemplate(documentType, values),
    [documentType, values],
  );
  const fileName = values?.documentName?.trim()
    ? values.documentName
    : "document.pdf";

  // const trackDownloads = async () => {
  //   const payload = {
  //     userID: userID,
  //     documentType: documentType,
  //   };
  //   await getTrackDocumentsApi(payload);
  // };
  return (
    <Box sx={{ display: "flex" }}>
      <PDFDownloadLink
        key={`download-${pdfKey}`}
        document={pdfDocument}
        // fileName={`Offer Letter-${values.name} ${month}-${year}`}
        // fileName={getDocumentname(documentType,values.name)}
        fileName={fileName}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2, fontSize: { xs: "10px", sm: "13px" } }}
          endIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
          // onChange={trackDownloads}
        >
          Download
        </Button>
      </PDFDownloadLink>
      <BlobProvider key={`preview-${pdfKey}`} document={pdfDocument}>
        {/* {({ url, blob }) => (
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              variant="contained"
            endIcon={<LocalPrintshopIcon sx={{fontSize:14}} />}
            >
              Print/Preview
            </Button>
          </a>
        )} */}
        {({ url }) =>
          url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <Button
                variant="contained"
                sx={{ fontSize: { xs: "10px", sm: "13px" } }}
                endIcon={<LocalPrintshopIcon sx={{ fontSize: 14 }} />}
              >
                {/* Print/Preview */}
                Preview
              </Button>
            </a>
          ) : (
            <></>
          )
        }
      </BlobProvider>
      {/* <BlobProvider document={<Invoice />}>
          {({ url, blob }) => (
            <div style={styles.btn} onClick={() => handleShare(url, blob)}>
              <FiShare2 size={14} />
              <span>Share</span>
            </div>
          )}
        </BlobProvider> */}
    </Box>
  );
};

export default PdfCard;
