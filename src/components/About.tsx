import {
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import AboutImg from "../assets/about_image.webp";

import "../css/index.css";

function AboutSection() {
    return (
        <>
            {/* About Section */}
            < Box component="section" id="About" >
                <Container maxWidth='xl'>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} spacing={0}>
                        <Grid item xs={12} md={12} lg={5} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "15px" }}>
                            <img
                                src={AboutImg}
                                alt="TCP About Image"
                                style={{ width: "100%", maxWidth: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                className="sectionHeading"
                                sx={{
                                    textAlign: "left",
                                    fontSize: "20px",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    color: "#585858",
                                    fontFamily: "Nunito",
                                    mb: 1
                                }}
                            >
                                About our Company
                            </Typography>
                            <Typography
                                className="sectionHeading"
                                sx={{

                                    fontSize: "32px",
                                    lineHeight: "1.4",
                                    fontWeight: "800",
                                    color: "#0d4291",
                                    fontFamily: "Nunito",
                                    maxWidth: "625px",
                                    textAlign: "left",
                                    mb: 1.5,
                                }}
                            >
                                Discover How We{" "}
                                <span className="secondaryTextColor">Transform Visions </span>{" "}
                                into Cutting-Edge Innovation
                            </Typography>
                            <Typography
                                sx={{

                                    fontSize: "17px",
                                    lineHeight: "30px",
                                    fontWeight: "600",
                                    color: "#484848",
                                    fontFamily: "Nunito",
                                    textAlign: "left",
                                    mb: 1.5
                                }}
                            >
                                Our company has a global footprint with offices in the USA and
                                two offshore development centers in India. Our team includes
                                skilled 3D animators, web designers, developers, tech support
                                specialists, and system administrators, all dedicated to
                                delivering high-quality solutions. We provide a wide range of
                                web services, such as website design, development, domain
                                upgrades, maintenance, and secure hosting. With a focus on
                                innovation and excellence, we ensure our clients' needs are met
                                with precision and creativity, helping businesses thrive in the
                                digital space.
                            </Typography>
                            <Typography
                                sx={{

                                    fontSize: "17px",
                                    lineHeight: "30px",
                                    fontWeight: "600",
                                    color: "#484848",
                                    fontFamily: "Nunito",
                                    textAlign: "left",
                                    mb: 2
                                }}
                            >
                                In addition, our system administrators offer expert remote management of Linux and Windows servers. They provide 24/7 support for critical systems, including websites, e-commerce platforms, email servers, and supply chain portals, ensuring seamless operations and robust performance at all times.
                            </Typography>

                            {/* Show button only on homepage */}
                            {location.pathname === "/" && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: "200px",
                                        height: "auto",
                                        padding: '15px 30px',
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        fontFamily: "Nunito, sans-serif",
                                        background: "#2B7DCD",
                                        borderRadius: "35px",
                                        boxShadow: "none",
                                        textAlign: 'left'
                                    }}
                                >
                                    <a href="/about" style={{ color: '#fff' }}>
                                        Read More
                                    </a>
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box >


        </>

    )
}

export default AboutSection;