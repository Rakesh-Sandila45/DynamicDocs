import { LoginComponent } from "@/PageComponents/components/LoginForm";
import PublicHeader from "@/PageComponents/components/PublicHeader";
import { Box, Container, Paper, Typography, Divider } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <Box>
      <PublicHeader />
      <Box
        sx={{
          background: "linear-gradient(to right, #00004f,#000 )",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          animation: "fadeIn 1s ease-in-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 4,
              borderRadius: 3,
              background: "#ffffff",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              width: "100%",
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
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;
