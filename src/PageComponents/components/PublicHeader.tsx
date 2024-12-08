import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { getAuth, signOut } from "firebase/auth";
import { setAuthToken } from "@/axios";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseAuth } from "@/pages/_app";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Drawer, List, ListItem, MenuItem } from "@mui/material";
import Link from "next/link";
function PublicHeader() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useCustomRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onSignOutClick = () => {
    handleCloseNavMenu();
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

            <Box
              sx={{
                width: "100%",
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/")}
              >
                Home
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => router.push("/aboutUsPage")}
              >
                About Us
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              {!isAuthenticated ? (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontSize: { xs: "13px", sm: "15px" } }}
                  onClick={() => router.push("/loginPage")}
                >
                  Login
                </Button>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ fontSize: { xs: "13px", sm: "15px" } }}
                  onClick={onSignOutClick}
                >
                  Logout
                </Button>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                sx={{
                  "& .MuiDrawer-paper": {
                    width: { xs: "200px", sm: "350px" },
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
                anchor="right"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <List sx={{ padding: 0 }}>
                  <Box
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      p: 2,
                    }}
                  >
                    <IconButton
                      onClick={handleCloseNavMenu}
                      sx={{ height: "30px" }}
                    >
                      <Button>
                        <CloseIcon
                          sx={{ color: "white", fontSize: "30px !important" }}
                        />
                      </Button>
                    </IconButton>
                  </Box>
                  <ListItem sx={{ display: "block", padding: "0px", pt: 2 }}>
                    <MenuItem>
                      <Link
                        href={"/"}
                        style={{
                          color: "white",
                          width: "100%",
                        }}
                        onClick={handleCloseNavMenu}
                      >
                        Home
                      </Link>
                    </MenuItem>
                  </ListItem>
                  <ListItem sx={{ display: "block", padding: "0px", pt: 2 }}>
                    <MenuItem>
                      <Link
                        href={"/aboutUsPage"}
                        onClick={handleCloseNavMenu}
                        style={{ color: "white", width: "100%" }}
                      >
                        About us
                      </Link>
                    </MenuItem>
                  </ListItem>
                  <ListItem sx={{ display: "block", padding: "0px", pt: 2 }}>
                    <MenuItem>
                      {!isAuthenticated ? (
                        <Link
                          href={"/loginPage"}
                          style={{ color: "white", width: "100%" }}
                          onClick={handleCloseNavMenu}
                        >
                          Login
                        </Link>
                      ) : (
                        <Link
                          href={""}
                          style={{ color: "white", width: "100%" }}
                          onClick={onSignOutClick}
                        >
                          Logout
                        </Link>
                      )}
                    </MenuItem>
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PublicHeader;
