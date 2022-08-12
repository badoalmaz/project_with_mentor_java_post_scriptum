import * as React from "react";
import { Paper, Container, Typography, Box, Link, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../assets/icons/logo.svg";
import '../styles/footer.css'
export default function Footer() {
    return (
        <Paper sx={{width: '83.83vw',position:'absolute',right:'0'}}   component="footer" square variant="outlined">
            <Container className='footer' >
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1,

                    }}>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: 'pointer', m: 2 ,gap:'50px'}}>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                        <InstagramIcon className='item'  />
                    </Link>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                        <TelegramIcon className='item'  />
                    </Link>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                        <WhatsAppIcon className='item'  />
                    </Link>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                        <TwitterIcon className='item' />
                    </Link>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                        <MailOutlineIcon className='item'  />
                    </Link>
                    <Link href="https://github.com/badoalmaz/project_with_mentor_java_post_scriptum">
                      <GitHubIcon className='item'  />
                    </Link>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography style={{fontWeight:'600',fontSize:'14px',marginTop:'10px'}} variant="caption" color="#8C2CEF">
                        Copyright ©2022.
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
} 