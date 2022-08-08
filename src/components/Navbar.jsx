import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, checkAuth, error, logout } = useAuth();

  console.log(user, "usee2222222222222r");

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
          <ArrowBackIosRoundedIcon onClick={() => navigate(-1)} />
          <ArrowBackIosRoundedIcon
            sx={{ transform: "rotate(180deg)" }}
            onClick={() => navigate(1)}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

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
              <Button id="home" color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button id="" color="inherit" onClick={() => navigate("/about")}>
                About Us
              </Button>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button id="reg" color="inherit">
                  Register
                </Button>
              </Link>
              <h3>/</h3>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button id="login" color="inherit">
                  Login
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
