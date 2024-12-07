import {
  Box,
  Grid2,
  Typography,
  Container,
  Link,
  IconButton,
} from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", color: "#fff", pt: 4 }}>
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Dynamic Docs is your go-to solution for creating customizable PDFs
              with ease. Save time and boost productivity.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: support@dynamicdocs.com <br />
              Phone: +1-234-567-8900
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: { xs: 2, sm: 0 },
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex" }}>
                {[
                  {
                    id: 1,
                    src: <TwitterIcon sx={{ color: "#fff" }} />,
                    link: "#",
                  },

                  {
                    id: 2,
                    src: <LinkedInIcon sx={{ color: "#fff" }} />,
                    link: "#",
                  },
                  {
                    id: 3,
                    src: <FacebookRoundedIcon sx={{ color: "#fff" }} />,
                    link: "#",
                  },
                  {
                    id: 4,
                    src: <InstagramIcon sx={{ color: "#fff" }} />,
                    link: "#",
                  },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    sx={{
                      pointerEvents: "none",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        p: 0.5,
                      }}
                    >
                      {item.src}
                    </IconButton>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box sx={{ backgroundColor: "primary.main", p: 2, mt: 4 }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography> © 2024 DynamicDocs. All rights reserved. </Typography>
          <Typography>Version 0.1</Typography>
        </Container>
      </Box>
    </Box>
  );
};
