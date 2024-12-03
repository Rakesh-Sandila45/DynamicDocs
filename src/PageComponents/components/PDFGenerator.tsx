import React from "react";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
// import { saveAs } from "file-saver";
import OfferLetter from "../../DocumentComponents/OfferLetter";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { getTemplate } from "@/utils";
import { useParams } from "@/customHooks/useParams";
import { getTrackDocumentsApi } from "@/apiData/api";

const PdfCard = (props: any) => {
  const { values, documentType } = props;
  const { userID } = useParams();

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
        document={getTemplate(documentType, values)}
        // fileName={`Offer Letter-${values.name} ${month}-${year}`}
        // fileName={getDocumentname(documentType,values.name)}
        fileName={values.documentName}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          endIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
          // onChange={trackDownloads}
        >
          Download
        </Button>
      </PDFDownloadLink>
      <BlobProvider document={<OfferLetter values={values} />}>
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
                endIcon={<LocalPrintshopIcon sx={{ fontSize: 14 }} />}
              >
                Print/Preview
              </Button>
            </a>
          ) : (
            <Button
              variant="contained"
              disabled
              endIcon={<LocalPrintshopIcon sx={{ fontSize: 14 }} />}
            >
              Print/Preview
            </Button>
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
