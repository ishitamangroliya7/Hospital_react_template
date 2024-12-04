import React, { useEffect } from 'react';
import { Grid, Typography, Box, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";

import aboutImage from '../assets/images/about.jpg';
import serviceImage1 from '../assets/images/sevicesimg1.jpg';
import serviceImage2 from '../assets/images/servicesimg2.jpg';
import serviceImage3 from '../assets/images/servicesimg3.jpg';
import serviceImage4 from '../assets/images/servicesimg4.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <Container>
            <Grid container id="about" sx={{ paddingTop: 4 }} spacing={4}>
              
                <Grid
                    item
                    xs={12}
                    lg={4}
                    data-aos="fade-right" 
                >
                    <Box
                        component="img"
                        src={aboutImage}
                        alt="About Us"
                        sx={{
                            width: '100%',
                            borderRadius: '8px',
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    lg={8}
                    sx={{ paddingLeft: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
                    data-aos="fade-left"
                >
                    <Typography variant="h3" className='h3' sx={{ fontWeight: 'bold', mb: 3 }}>
                        About LifeCare
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 3 }}>
                        Our mission is to provide exceptional healthcare with a compassionate and patient-centered approach.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        Our hospital has been at the forefront of providing top-quality medical care for over 20 years. We believe in the importance of
                        combining medical excellence with empathy, ensuring that every patient receives the best care possible.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2, lineHeight: 1.8 }}>
                        Our team of dedicated healthcare professionals is committed to making a difference in the lives of those we serve. Whether you're
                        coming in for a routine check-up or seeking specialized treatment, we are here for you every step of the way.
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    id="service1"
                    data-aos="zoom-in" 
                >
                    <Box sx={{ textAlign: 'center', my: 4 }}>
                        <Typography variant="h3" className='h3' sx={{ fontWeight: 'bold', mb: 2 }}>
                            Medical And General Practice Care!
                        </Typography>
                        <Typography variant="h6">
                            Providing Medical Care For The<br />
                            In Our Health Service.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} container spacing={4}>
                    {[
                        { image: serviceImage1, title: 'General Checkup', text: 'Regular health assessments to maintain and improve your well-being.' },
                        { image: serviceImage2, title: 'Diagnostics', text: 'Comprehensive diagnostic services for accurate and timely results.' },
                        { image: serviceImage3, title: 'Surgery', text: 'Advanced surgical procedures performed by experienced specialists.' },
                        { image: serviceImage4, title: 'Therapy', text: 'Specialized therapies to aid in recovery and enhance quality of life.' },
                    ].map((service, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            data-aos="fade-up" 
                            data-aos-delay={index * 200} 
                        >
                            <Box sx={{ height: "100%", display: "flex" }}>
                                <Card sx={{ backgroundColor: "#e5f2ff" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service.image}
                                        alt={service.title}
                                    />
                                    <CardContent sx={{ backgroundColor: "#e5f2ff" }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                                            {service.text}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ marginTop: 2 }}
                                            className="appointment-btn"
                                        >
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
