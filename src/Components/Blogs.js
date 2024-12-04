import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Box, Button, Container, Pagination } from "@mui/material";
import img2 from '../assets/images/img2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const recentPosts = [
        { title: "How to Improve Your Mental Health", link: "#" },
        { title: "Top Tips for Healthy Eating", link: "#" },
        { title: "Understanding Diabetes Management", link: "#" },
        { title: "How to Stay Active During Recovery", link: "#" },
        { title: "Latest Advances in Medical Technology", link: "#" },
    ];

    const blogPosts = [
        {
            title: "The Importance of Regular Health Check-ups",
            image: img2,
            date: "Dec 2, 2024",
            time: "10:00 AM",
            description:
                "This blog highlights the importance of scheduling regular health check-ups and how they can help in early disease detection and overall wellness.",
        },
        {
            title: "Managing Stress and Anxiety During Healthcare Treatment",
            image: img2,
            date: "Nov 28, 2024",
            time: "2:30 PM",
            description:
                "We discuss strategies for managing stress and anxiety, especially for patients undergoing medical treatments, and how to stay mentally strong.",
        },
        {
            title: "The Role of Nutrition in Post-Surgery Recovery",
            image: img2,
            date: "Nov 25, 2024",
            time: "11:00 AM",
            description:
                "In this blog, we explore how proper nutrition plays a critical role in speeding up recovery after surgery and promoting long-term health.",
        },
        {
            title: "How to Manage Chronic Pain",
            image: img2,
            date: "Nov 20, 2024",
            time: "3:00 PM",
            description:
                "This blog post provides effective methods for managing chronic pain and improving quality of life for those affected.",
        },
        {
            title: "The Benefits of Physical Therapy for Recovery",
            image: img2,
            date: "Nov 15, 2024",
            time: "9:00 AM",
            description:
                "Learn about the many benefits of physical therapy for patients recovering from surgeries or injuries and how it aids rehabilitation.",
        },
        {
            title: "How to Manage Chronic Pain",
            image: img2,
            date: "Nov 20, 2024",
            time: "3:00 PM",
            description:
                "This blog post provides effective methods for managing chronic pain and improving quality of life for those affected.",
        },
        {
            title: "The Benefits of Physical Therapy for Recovery",
            image: img2,
            date: "Nov 15, 2024",
            time: "9:00 AM",
            description:
                "Learn about the many benefits of physical therapy for patients recovering from surgeries or injuries and how it aids rehabilitation.",
        },
    ];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Container id="blogs">
            <Grid container spacing={4} sx={{ marginTop: "30px", minHeight: "100vh" }}>
                <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column" }} data-aos="fade-up">
                    <Paper className="recent-post" sx={{ padding: "20px", flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            Recent Posts
                        </Typography>
                        <Box>
                            {recentPosts.map((post, index) => (
                                <Typography key={index} variant="body2" sx={{ marginBottom: "10px" }} data-aos="fade-right" data-aos-delay={`${index * 200}`}>
                                    <a href={post.link} style={{ textDecoration: "none", color: "#333" }}>
                                        <p>{post.title}</p>
                                    </a>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column" }}>
                    <Grid container spacing={3} sx={{ flex: 1 }}>
                        {currentPosts.map((post, index) => (
                            <Grid item xs={12} key={index}>
                                <Paper sx={{ padding: 3, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "15px" }} data-aos="fade-up" data-aos-delay={`${index * 300}`}>
                                    <Box sx={{ flex: "1", minWidth: "150px" }}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ marginTop: "10px", flex: "2" }}>
                                        <Typography variant="h6" gutterBottom>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.date} | {post.time}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginTop: "10px" }}>
                                            {post.description}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            className="appointment-btn"
                                            sx={{ marginTop: "10px", marginBottom: "10px" }}
                                            href="#"
                                        >
                                            Read More
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }} data-aos="fade-up">
                        <Pagination
                            count={Math.ceil(blogPosts.length / postsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            sx={{
                                "& .MuiPaginationItem-root.Mui-selected": {
                                    backgroundColor: "skyblue",
                                },
                                "& .MuiPaginationItem-root:hover": {
                                    backgroundColor: "#8cc744",
                                },
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Blogs;
