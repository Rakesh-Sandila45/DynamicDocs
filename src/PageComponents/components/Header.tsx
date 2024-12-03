import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { getAuth, signOut } from "firebase/auth";
import { setAuthToken } from "@/axios";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseAuth } from "@/pages/_app";

function ResponsiveAppBar(props: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { page } = props;
  const router = useCustomRouter();
  const onSignOutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setAuthToken("");
        router.push("/");
      })
      .catch((error) => {
        console.log("Unable to sign out", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image
              src={"/logo.png"}
              alt={""}
              height={100}
              width={100}
              priority
              style={{ height: "3rem", width: "auto" }}
              onClick={() => router.push("/")}
            />
            {!isAuthenticated ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => router.push("/loginPage")}
              >
                <Typography>Login</Typography>
              </Button>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                onClick={onSignOutClick}
              >
                <Typography>Logout</Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
