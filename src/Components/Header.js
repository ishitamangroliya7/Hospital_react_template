import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Container, Button, Menu, MenuItem, Box } from "@mui/material";
import logo from "../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleServicesMenu = (event) => {
        setServicesAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setServicesAnchorEl(null);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container className="header">
            <AppBar position="fixed" id="navbar" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Box sx={{ display: "flex", color: "black", alignItems: "center", flexGrow: "1" }}>
                        <img src={logo} alt="logo" style={{ height: "40px" }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>LIFECARE</Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: "1" }}>
                        <Button className="nav-link" href="#banner">
                            Home
                        </Button>
                        <Button className="nav-link" href="#about">
                            About
                        </Button>
                        <Button
                            className="nav-link"
                            onMouseEnter={handleServicesMenu}
                            href="#services"
                        >
                            Services
                        </Button>
                        <Menu
                            anchorEl={servicesAnchorEl}
                            open={Boolean(servicesAnchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose} component="a" href="#service1">
                                Service 1
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component="a" href="#service2">
                                Service 2
                            </MenuItem>
                        </Menu>
                        <Button className="nav-link" href="#doctor1">
                            Doctors
                        </Button>
                        <Button className="nav-link" href="#blogs">
                            Blogs
                        </Button>
                        <Button className="nav-link" href="#faqs">
                            Faqs
                        </Button>
                    </Box>
                    <Box
                        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}
                    >
                        <Button variant="contained" className="appointment-btn" href="#appointment">
                            Appointment
                        </Button>
                    </Box>
                    <Box>
                        <IconButton className="menu-btn"
                            color="black"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: "flex", md: "none" }, flexGrow: "1" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    <ListItem button component="a" href="#banner">
                        <ListItemText primary="Header" />
                    </ListItem>
                    <ListItem button component="a" href="#about">
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Services" onClick={handleServicesMenu} />
                    </ListItem>
                    <Menu
                        anchorEl={servicesAnchorEl}
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component="a" href="#service1">
                            Service 1
                        </MenuItem>
                        <MenuItem component="a" href="#service2">
                            Service 2
                        </MenuItem>
                    </Menu>
                    <ListItem button component="a" href="#doctor1">
                        <ListItemText primary="Doctors" />
                    </ListItem>
                    <ListItem button component="a" href="#blogs">
                        <ListItemText primary="Blogs" />
                    </ListItem>
                    <ListItem button component="a" href="#faqs">
                        <ListItemText primary="Faqs" />
                    </ListItem>
                </List>
            </Drawer>
        </Container>
    );
};

export default Header;
