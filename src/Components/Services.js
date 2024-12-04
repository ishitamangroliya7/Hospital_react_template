import React, { useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import "./Header.css";

const swiperItems = [
    {
        image: img1,
        title: "Consultation",
        content: "We start by understanding your needs through a detailed consultation.",
    },
    {
        image: img2,
        title: "Planning",
        content: "We develop a customized plan tailored to your requirements.",
    },
    {
        image: img3,
        title: "Implementation",
        content: "Our team executes the plan with precision and dedication.",
    },
    {
        image: img4,
        title: "Monitoring",
        content: "We closely monitor the progress to ensure everything is on track.",
    },
    {
        image: img2,
        title: "Feedback",
        content: "Your feedback helps us improve and deliver the best results.",
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <Container id="service2" sx={{ pt: 4 }}>
            <Typography variant="h3" className="h3" sx={{ fontWeight: 'bold', textAlign: "center", mb: 2, mt: 4 }} data-aos="fade-up">
                How We Work?
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }} data-aos="fade-up" data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />
                tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                loop={true}
                style={{ padding: "1rem 0" }}
            >
                {swiperItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "1rem",
                                height: "100%",
                                background: "#fff",
                            }}
                            data-aos="fade-up" 
                            data-aos-delay={index * 200}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "80%",
                                }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "1rem", fontWeight: 'bold' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "0.5rem", color: "#666" }} >
                                {item.content}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Services;
