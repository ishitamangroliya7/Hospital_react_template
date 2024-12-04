import React, { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import appointment from "../assets/images/appointment.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Appointment = () => {
    const [preferredTime, setPreferredTime] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const handleTimeChange = (event) => {
        setPreferredTime(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setOpenSuccessModal(true);

        setFullName("");
        setEmail("");
        setPhone("");
        setCity("");
        setPreferredDate("");
        setPreferredTime("");
    };

    const handleCloseSuccessModal = () => {
        setOpenSuccessModal(false);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <Grid container id="appointment">
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    backgroundImage: `url(${appointment})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                data-aos="fade-right"
            ></Grid>

            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                data-aos="fade-up" 
            >
                <Paper className="appointment-card" sx={{ width: "100%", height: "100%", padding: 4 }}>
                    <Typography variant="h5" sx={{ marginBottom: "50px", fontSize: "26px" }} align="center">
                        Book an Appointment
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} data-aos="fade-up">
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    variant="outlined"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="100">
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="200">
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-delay="300">
                                <TextField
                                    fullWidth
                                    label="Preferred Date"
                                    variant="outlined"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    value={preferredDate}
                                    onChange={(e) => setPreferredDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} data-aos="fade-up" data-aos-delay="400">
                                <TextField
                                    fullWidth
                                    label="City"
                                    variant="outlined"
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} data-aos="fade-up" data-aos-delay="500">
                                <TextField
                                    fullWidth
                                    label="Preferred Time"
                                    variant="outlined"
                                    type="time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={preferredTime}
                                    onChange={handleTimeChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} data-aos="fade-up" data-aos-delay="600">
                                <Button fullWidth type="submit" variant="contained" className="appointment-btn">
                                    Make Appointment
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>

            <Dialog open={openSuccessModal} onClose={handleCloseSuccessModal}>
                <DialogTitle sx={{ padding: "25px", backgroundColor: "#e5f2ff" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                        Thank you for<br /> connecting with LifeCare
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <CheckCircleIcon sx={{ fontSize: 80, color: "#4CAF50" }} />
                    </Box>
                    <Typography variant="body1" sx={{ fontSize: "16px", mt: 2, textAlign: "center" }}>
                        Your appointment has been successfully booked!<br /> We will contact you shortly with the details.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuccessModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Appointment;
