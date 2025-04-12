import {
    Box,
    Typography,
    Container,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import NavBar from "../components/NavBar";
import About from "../components/About";
import Footer from "../components/Footer";
import "../css/about.css";


// Assets
import TajRowland from "../assets/Taj.webp"

import expertise from "../assets/ICONS/idea.webp";
import comprehensive from "../assets/ICONS/development.webp";
import support from "../assets/ICONS/24-7.webp";


function AboutPage() {
    const WhyChooseCards = [
        {
            Title: "Expertise and Innovation",
            Description: "Our skilled team blends creativity and expertise to deliver advanced web solutions and stunning 3D animations that exceed expectations.",
            Image: expertise,
        },
        {
            Title: "Comprehensive Services",
            Description: "We provide complete digital solutions, including design, development, hosting, and IT support, all under one roof.",
            Image: comprehensive,
        },
        {
            Title: "Reliable 24/7 Support",
            Description: "Our team offers 24/7 server management, ensuring seamless operations for websites, e-commerce platforms, and more.",
            Image: support,
        },
    ];

    const ourTeams = [
        {
            Image: TajRowland,
            Nmae: 'Taj Rowland',
            Designation: 'Cheif Executive Officer'
        },
        {
            Image: TajRowland,
            Nmae: 'Jonathan Cairns',
            Designation: 'Cheif Operating Officer'
        },
        {
            Image: TajRowland,
            Nmae: 'Christopher Raj',
            Designation: 'Operation Head'
        }
    ]
    return (
        <>
            <NavBar />
            {/* About Banner Section */}
            <Box component="section" id="aboutBanner" className="section-bg">
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={4}
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Grid item xs={12} md={6}>
                            <Typography variant="h1"
                                sx={{
                                    color: "#fff",
                                    fontSize: "45px",
                                    lineHeight: "1.2",
                                    fontWeight: "700",
                                    fontFamily: "Nunito",
                                    mb: 1.5,
                                }}
                            >
                                About TCP International Inc
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "20px",
                                    fontWeight: "500 !important",
                                    fontFamily: "Nunito",
                                    mb: 2.5,
                                    maxWidth: "500px",
                                }}
                            >
                                Revolutionizing companies with a distinctive mix of knowledge and experience.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* About Company */}
            <About />
            {/* Our Projects */}

            {/* Why Choose Us */}
            <Box component='section' id="whyChooseUs">
                <Container maxWidth='xl'>
                    <Grid container>
                        {/* Section Heading */}
                        <Grid item xs={12} md={12} lg={12} sx={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0px auto', width: '100%',
                        }}>
                            <Typography
                                className="sectionHeading"
                                sx={{
                                    textAlign: "center",
                                    fontSize: "20px",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    color: "#fff",
                                    fontFamily: "Nunito",
                                    mb: 1
                                }}
                            >
                                Why Choose Us
                            </Typography>
                            <Typography
                                className="sectionHeading"
                                sx={{
                                    textAlign: "center",
                                    fontSize: "32px",
                                    lineHeight: "1.4",
                                    fontWeight: "800",
                                    color: "#fff",
                                    fontFamily: "Nunito",
                                    maxWidth: "650px",
                                    margin: "0 auto",
                                    marginBottom: '25px'
                                }}
                            >
                                Your <span className="secondaryTextColor">Trusted Partner </span>
                                for Exceptional Digital Solutions
                            </Typography>
                        </Grid>

                        {/* WhyChoose Container */}

                        <Grid container spacing={3}>
                            {WhyChooseCards.map((whyChooseUs, index) => (
                                <Grid
                                    item
                                    key={index}
                                    xs={12}
                                    md={6}
                                    lg={4}
                                >
                                    <Box
                                        sx={{
                                            background: "#fff",
                                            borderRadius: "16px",
                                            padding: "24px",
                                            width: "90%",
                                            margin: "15px 0",
                                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                            textAlign: 'center',
                                            minHeight: '250px',
                                        }}>
                                        <img
                                            src={whyChooseUs.Image}
                                            alt={whyChooseUs.Title}
                                            style={{ width: "65px", marginBottom: "15px" }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "22px",
                                                lineHeight: "1.4",
                                                fontWeight: "800",
                                                color: "#0d4291",
                                                fontFamily: "Nunito",
                                                mb: 1,
                                            }}
                                        >
                                            {whyChooseUs.Title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "17px",
                                                lineHeight: "30px",
                                                fontWeight: "600",
                                                color: "#484848",
                                                fontFamily: "Nunito",
                                                mb: 1,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {whyChooseUs.Description}
                                        </Typography>
                                    </Box>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container >
            </Box >
            {/* Meet Our Team */}
            <Box component="div" id="our-team">
                <Container maxWidth="lg">
                    {/* Section Heading */}
                    <Grid item xs={12} md={12} lg={12} sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0px auto', width: '100%',
                    }}>
                        <Typography
                            className="sectionHeading"
                            sx={{
                                textAlign: "center",
                                fontSize: "20px",
                                lineHeight: "1.4",
                                fontWeight: "700",
                                color: "#484848",
                                fontFamily: "Nunito",
                                mb: 1
                            }}
                        >
                            Meet Our Team
                        </Typography>
                        <Typography
                            className="sectionHeading"
                            sx={{
                                textAlign: "center",
                                fontSize: "32px",
                                lineHeight: "1.4",
                                fontWeight: "800",
                                color: "#0d4291",
                                fontFamily: "Nunito",
                                maxWidth: "650px",
                                margin: "0 auto",
                                marginBottom: '25px'
                            }}
                        >
                            Get to Know the  Driving <span className="secondaryTextColor">Creative Minds </span>for Our Success
                        </Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        {ourTeams.map((ourTeams, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Box>
                                    <Box className="cardMedia" sx={{ mb: 1.5 }}>
                                        <img
                                            src={ourTeams.Image}
                                            alt={ourTeams.Nmae}
                                            style={{ width: "100%", height: "auto", borderRadius: '16px', }}
                                        />
                                    </Box>
                                    <Box className="Card-Desc" sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                fontSize: "24px",
                                                lineHeight: "1.4",
                                                fontWeight: 800,
                                                color: "#0d4291",
                                                fontFamily: "Nunito",
                                                mb: 1.5,
                                                margin: '0 auto',

                                            }}
                                        >
                                            {ourTeams.Nmae}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "20px",
                                                lineHeight: "30px",
                                                fontWeight: "600",
                                                color: "#484848",
                                                fontFamily: "Nunito",
                                                mb: 1,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {ourTeams.Designation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            {/* Footer */}
            <Footer />

        </>
    )
}

export default AboutPage;
