import {
    Box,
    Typography,
    Container,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/services.css";

// Assets


import medicalAnimation from '../assets/MedicalAnimations.webp'
import autoAnimation from '../assets/3DAnimations.webp'
import mobileAppImg from '../assets/Mobile App Development.webp'
import WebDevImg from '../assets/Web Development.webp'
import uixImg from '../assets/UIUX _SERVICE.webp'


function ServicePage() {
    const projects = [
        {
            title: "Medical Animations",
            Description: "Bring complex medical concepts to life with precise 3D animations, perfect for education, training, and product demos.",
            backgroundImg: medicalAnimation,
        },
        {
            title: "Automobile Animations",
            Description: "Showcase automotive innovation with stunning 3D animations that highlight design, mechanics, and performance.",
            backgroundImg: autoAnimation,
        },
        {
            title: "Mobile App Development",
            Description: "We expertly manage your mobile app projects on both Linux and Windows. Let our design team enhance your user experience with customized solutions!",
            backgroundImg: mobileAppImg,
        },
        {
            title: "Web Development",
            Description: "Transform your ideas into reality with our cutting-edge web development services, delivering responsive, secure, and scalable websites tailored to drive your business success",
            backgroundImg: WebDevImg,
        },
        {
            title: "Web Design",
            Description: "We craft visually engaging and user-friendly service websites tailored to your brand and goals. Our designs focus on performance, responsiveness, and seamless user experience across all devices.",
            backgroundImg: uixImg,
        },
    ];

    return (
        <>

            <NavBar />
            {/* About Banner Section */}
            <Box component="section" id="aboutBanner" className="section-bg">
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={3}
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
                                Our Services
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
                                We provide innovative solutions to bring your vision to life, offering 3D animations, website development, and mobile app development.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth='xl'>
                <Box component='section' id="services">
                    <Grid container spacing={3}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Box className='serviceCard' style={{
                                    backgroundImage: `url(${project.backgroundImg})`,
                                }}>

                                    <Box className='serviceContent'>
                                        <Typography className="serviceTitle" sx={{
                                            color: "#fff",
                                            fontSize: "28px",
                                            lineHeight: "1.2",
                                            fontWeight: "700",
                                            fontFamily: "Nunito",
                                            mb: 1.5,
                                            maxWidth: '180px'
                                        }}>
                                            {project.title}
                                        </Typography>
                                        <Typography className="serviceDesc" sx={{
                                            color: "#fff",
                                            fontSize: "17px",
                                            lineHeight: "150%",
                                            fontWeight: "500",
                                            fontFamily: "Nunito",
                                            mb: 1.5,
                                            display: 'none',
                                        }}>
                                            {project.Description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default ServicePage;
