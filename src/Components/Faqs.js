import React, { useState, useEffect } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Typography,
    Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import appointment from "../assets/images/appointment.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";

const Faqs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <Grid container sx={{ marginTop: "50px" }} id="faqs">
            <Grid
                item
                xs={12}
                sx={{
                    display: { md: "none", xs: "block" },
                }}
            >
                <img
                    src={appointment}
                    alt="Appointment"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </Grid>
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
                <Paper className="faq-card" sx={{ width: "100%", padding: 4 }}>
                    <Typography variant="h5" sx={{ marginBottom: "50px", fontSize: "26px" }} align="center">
                        Frequently Asked Questions
                    </Typography>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleAccordionChange("panel1")}
                        sx={{ marginBottom: "8px", borderRadius: "4px" }}
                        data-aos="fade-up" 
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="acc-item"
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What services do you offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We offer a wide range of services including consultation, diagnosis, and specialized treatments tailored to your needs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleAccordionChange("panel2")}
                        sx={{ marginBottom: "8px", borderRadius: "4px" }}
                        data-aos="fade-up"
                        data-aos-delay="100" 
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="acc-item"
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How can I book an appointment?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can book an appointment online through our website or by contacting our office directly.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleAccordionChange("panel3")}
                        sx={{ marginBottom: "8px", borderRadius: "4px" }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="acc-item"
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>What are your operating hours?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We are open Monday to Friday from 9:00 AM to 6:00 PM. Weekend appointments are available on request.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleAccordionChange("panel4")}
                        sx={{ marginBottom: "8px", borderRadius: "4px" }}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="acc-item"
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography>Do you accept insurance?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we accept a variety of insurance plans. Please contact our office for more information on the plans we accept.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleAccordionChange("panel5")}
                        sx={{ marginBottom: "8px", borderRadius: "4px" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className="acc-item"
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                        >
                            <Typography>Is parking available?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we provide free parking for all our patients in the parking lot adjacent to our office.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </Grid>

            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    backgroundImage: `url(${appointment})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                data-aos="fade-left"
                data-aos-delay="500"
            ></Grid>
        </Grid>
    );
};

export default Faqs;
