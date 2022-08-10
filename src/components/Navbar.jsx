import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContextProvider";

export default function Navbar() {
  const { user, checkAuth, error, logout } = useAuth();
  console.log(user, "useeeeeeeeeeeeeeeeeeeeeer");

  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosRoundedIcon />
          </IconButton>

          <IconButton onClick={() => navigate(1)}>
            <ArrowBackIosRoundedIcon sx={{ transform: "rotate(180deg)" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>

          <Typography
            component="span"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/admin")}
          >
            Admin
          </Typography>

          <Typography
            component="span"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/products")}
          >
            Products
          </Typography>

          {user ? (
            <Button
              color="inherit"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link to="/register">
                <Button color="inherit">Register</Button>
              </Link>

              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}