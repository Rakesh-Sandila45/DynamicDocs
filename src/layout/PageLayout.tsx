import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import PublicHeader from "@/PageComponents/components/PublicHeader";
import { Footer } from "@/PageComponents/components/Footer";
type Props = {
  children: ReactNode;
};

function PageLayout(props: Props) {
  const { children } = props;
  return (
    <Box
      sx={{
        margin: 0,
        height: "100%",
      }}
    >
      <PublicHeader />
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          mb: 0.1,
          bgcolor: "#FFFFFF",
          minHeight: "100vh",
          maxHeight: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ overflow: "auto" }}>
          {children}
        </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default PageLayout;
