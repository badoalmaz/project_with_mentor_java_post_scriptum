import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useAuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {

  const { user, checkAuth, error, logout } = useAuthContext();

  const navigate = useNavigate();

  React.useEffect(()=> {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  const appBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    maxWidth: '15vw',
    minWidth: '200px',
    position: 'fixed',
    left: 0,
    backgroundColor: 'white',
  }

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={appBarStyle}>
        <Toolbar sx={{mt: 2, display: 'flex', flexDirection: 'column'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton>
              <img src={logo} alt="logo" style={{width: '70%'}} />
            </IconButton>
            <Typography sx={{ color: '#8C2CEF', fontWeight: 700, mx: 2 }}>MakerShop</Typography>
          </Box>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize', mt: 5 }}>Overview</Button>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize' }}>Orders</Button>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize' }}>Products</Button>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize' }}>About Us</Button>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize' }}>Register</Button>
          <Button sx={{ my: 1, color: '#778494', width: '100%', textTransform: 'capitalize' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="fixed" sx={appBarStyle}>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //         onClick={()=>navigate(-1)}
    //       >
    //         <ArrowBackIosRoundedIcon />
    //       </IconButton>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //         onClick={()=>navigate(1)}
    //       >
    //         <ArrowForwardIosRoundedIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       { user ? (<Button color="inherit" onClick={()=>{
    //         logout();
    //         navigate('/login');
    //       }}>Logout</Button>) : (
    //       <>
    //         <Button color="inherit" onClick={()=>navigate('/register')}>Register</Button>
    //         <Button color="inherit" onClick={()=>navigate('/login')}>Login</Button>
    //       </>) }
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
