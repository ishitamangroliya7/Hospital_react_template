import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import heroImage from '../assets/images/hero.jpg';
import Button from "@mui/material/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Box 
            sx={{
                marginTop: '40px',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container sx={{ padding: "0px 24px" }}>
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{ display: 'flex', alignItems: 'center' }}
                    data-aos="fade-right" 
                >
                    <Box>
                        <Typography 
                            variant="h2" 
                            className='h2' 
                            sx={{ fontWeight: 'bold', mb: 2 }}
                            data-aos="fade-up" 
                        >
                            Welcome to LifeCare Environment
                        </Typography>
                        <Typography 
                            variant="h5" 
                            className='h5' 
                            sx={{ mb: 2 }}
                            data-aos="fade-up" 
                            data-aos-delay="300" 
                        >
                            Providing Quality Care with Compassion
                        </Typography>
                        <Button
                            variant="contained"
                            className="appointment-btn"
                            href="#appointment"
                            data-aos="zoom-in" 
                            data-aos-delay="600" 
                        >
                            Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
