import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { useAuth } from "../contexts/AuthContextProvider";
import { Badge } from "@mui/material";
import { useCart } from "../contexts/CartContextProvider";

export default function Navbar() {
  const { user, checkAuth, error, logout } = useAuth();

  const { cart } = useCart();
  console.log(cart.products.length);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const appBarStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "15vw",
    minWidth: "120px",
    position: "fixed",
    left: 0,
    backgroundColor: "white",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={appBarStyle}>
        <Toolbar sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <img
                src={logo}
                alt="logo"
                style={{ width: "5vmin", minWidth: "10px", maxWidth: "70%" }}
              />
            </IconButton>
            <Typography
              sx={{ color: "#8C2CEF", fontWeight: 700, fontSize: "2vmin" }}
            >
              MakerShop
            </Typography>
          </Box>
          <Link to="/">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
                mt: 5,
              }}
            >
              Overview
            </Button>
          </Link>

          <Link to="/cart">
            <Badge
              badgeContent={cart?.products.length}
              color="secondary"
              showZero
            >
              <Button
                sx={{
                  my: 1,
                  color: "#778494",
                  width: "100%",
                  textTransform: "capitalize",
                }}
              >
                Orders
              </Button>
            </Badge>
          </Link>
          <Link to="/products">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Products
            </Button>
          </Link>
          <Link to="/about">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              About Us
            </Button>
          </Link>
          <Link to="/register">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              sx={{
                my: 1,
                color: "#778494",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              Admin panel
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
