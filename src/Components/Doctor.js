import React, { useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Divider, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";
import doctor1 from '../assets/images/doctor1.jpg';
import doctor2 from '../assets/images/doctor2.jpg';
import doctor3 from '../assets/images/doctor3.jpg';
import doctor4 from '../assets/images/doctor4.jpg';

const Doctor = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <Container id="doctor1">
            <Typography variant="h3" className='h3' sx={{ fontWeight: 'bold', textAlign: "center", mb: 2, mt: 4 }} data-aos="fade-up">
                Amazing Team Members
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }} data-aos="fade-up" data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod<br />
                tempor incididunt ut labore et aliqua.
            </Typography>

            <Grid container spacing={4} sx={{ paddingTop: 4 }}>
                {/* Doctor 1 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', alignItems: 'center' }} data-aos="fade-up" data-aos-delay="400">
                        <CardMedia
                            component="img"
                            width="100%"
                            image={doctor1}
                            alt="Doctor 1"
                            sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                                Dr. John Doe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cardiologist
                            </Typography>
                            <Divider sx={{ backgroundColor: "black", height: "1px", marginY: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton className='social-icon'>
                                    <Facebook />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Twitter />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Doctor 2 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', alignItems: 'center' }} data-aos="fade-up" data-aos-delay="500">
                        <CardMedia
                            component="img"
                            width="100%"
                            image={doctor2}
                            alt="Doctor 2"
                            sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                                Dr. Jane Smith
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dermatologist
                            </Typography>
                            <Divider sx={{ backgroundColor: "black", height: "1px", marginY: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton className='social-icon'>
                                    <Facebook />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Twitter />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Doctor 3 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', alignItems: 'center' }} data-aos="fade-up" data-aos-delay="600">
                        <CardMedia
                            component="img"
                            width="100%"
                            image={doctor3}
                            alt="Doctor 3"
                            sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                                Dr. Mike Taylor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pediatrician
                            </Typography>
                            <Divider sx={{ backgroundColor: "black", height: "1px", marginY: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton className='social-icon'>
                                    <Facebook />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Twitter />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Doctor 4 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: '15px', alignItems: 'center' }} data-aos="fade-up" data-aos-delay="700">
                        <CardMedia
                            component="img"
                            width="100%"
                            image={doctor4}
                            alt="Doctor 4"
                            sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: "15px" }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                                Dr. Lisa Williams
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Neurologist
                            </Typography>
                            <Divider sx={{ backgroundColor: "black", height: "1px", marginY: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton className='social-icon'>
                                    <Facebook />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Twitter />
                                </IconButton>
                                <IconButton className='social-icon'>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Doctor;
