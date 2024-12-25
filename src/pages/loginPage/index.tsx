import { LoginComponent } from "@/PageComponents/components/LoginForm";
import PublicHeader from "@/PageComponents/components/PublicHeader";
import { Box, Typography, Divider, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <Box>
      <PublicHeader />

      <Grid2
        container
        sx={{ height: "100vh", display: "flex", alignItems: "end " }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{ mt: { xs: 8, sm: 0 } }}>
          <Image
            src={"/assets/loginbanner.png"}
            alt={""}
            height={500}
            width={500}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              maxWidth="sm"
              sx={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#00004f",
                  marginBottom: 2,
                }}
              >
                Welcome Back!
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                sx={{
                  color: "#555",
                  fontSize: "1rem",
                  marginBottom: 3,
                }}
              >
                Please enter your credentials to access your account.
              </Typography>
              <Divider
                sx={{
                  marginBottom: 3,
                  borderColor: "#ddd",
                }}
              />
              <LoginComponent />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default LoginPage;
