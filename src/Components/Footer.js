import React, { useEffect } from "react";
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../assets/images/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: '#f9f9f9',
                padding: '32px 32px',
                marginTop: '50px',
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={3} data-aos="zoom-in">
                    <Box sx={{ display: "flex", color: "black", alignItems: "center", mb: 1 }}>
                        <img src={logo} alt="logo" style={{ height: "40px" }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>LIFECARE</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)', lineHeight: 1.8 }}>
                        Empowering your health journey. Offering world-class healthcare solutions
                        tailored to your needs. Your wellness is our priority.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} data-aos="zoom-in">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Quick Links
                    </Typography>
                    <Box>
                        <Link href="#" underline="none" sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginBottom: 1 }}>
                            Home
                        </Link>
                        <Link href="#" underline="none" sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginBottom: 1 }}>
                            About Us
                        </Link>
                        <Link href="#" underline="none" sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginBottom: 1 }}>
                            Services
                        </Link>
                        <Link href="#" underline="none" sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)', marginBottom: 1 }}>
                            Contact
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={12} md={3} data-aos="zoom-in">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Contact Us
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <Box display="flex" alignItems="center" gap={1}>
                            <LocationOnIcon sx={{ color: 'rgba(0, 0, 0, 0.6)' }} />
                            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                123 Health St, Wellness City
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <PhoneIcon sx={{ color: 'rgba(0, 0, 0, 0.6)' }} />
                            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                +1 800 123 4567
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <EmailIcon sx={{ color: 'rgba(0, 0, 0, 0.6)' }} />
                            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                contact@lifecare.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={3} data-aos="zoom-in">
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Follow Us
                    </Typography>
                    <Box display="flex" gap={2}>
                        <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>

            </Grid>

            {/* Footer Bottom */}
            <Box sx={{ borderTop: '1px solid grey', marginTop: 4, paddingTop: 2, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'grey.500' }}>
                    &copy; 2024 LifeCare. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
