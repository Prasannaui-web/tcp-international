import {
    Box,
    Typography,
    Container,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import NavBar from "../components/NavBar";
import ContactForm from "../components/contactForm";
import Footer from "../components/Footer";
import "../css/contact.css";


// Assets
import LocationBackground from "../assets/officeaddressBG.webp";



function ContactPage() {


    const locationDetails = [
        {
            LocationName: 'Coimbatore',
            Address: 'SF 65/3, II Floor, MGPS Shopping Mall, MG Colony, Marudamalai Main Road, Vadavalli, Coimbatore - 641 041.'
        },
        {
            LocationName: 'Pune',
            Address: '# 6. Pratik Apartment Lane, No.8. Rajpath Society, Ram Krishna Param Hans Nagar, Paud Road, Kothrud, Pune 38. India'
        },
        {
            LocationName: 'USA',
            Address: 'Lehi, Utah - 84043 USA'
        },
    ]
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
                                Get in touch with Us
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
                                We’re here to help! Whether you have a question, our team is just a message away.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth='lg'>
                <Box component='section' id='contactPage'>
                    {/* Location Details */}
                    <Box className='contactLocationDetails' sx={{ mb: 3 }}>
                        <Grid container spacing={3}>
                            {locationDetails.map((locationDetails, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <Box className='LocationDetailsCard' style={{
                                        backgroundImage: `url("${LocationBackground}")`,
                                    }}>
                                        <Box className='LocationDetailsContent'>
                                            <Typography className="LocationDetailsTitle" sx={{
                                                color: "#fff",
                                                fontSize: "28px",
                                                lineHeight: "1.2",
                                                fontWeight: "700",
                                                fontFamily: "Nunito",
                                                mb: 1.5,
                                                textAlign: 'center'
                                            }}>
                                                {locationDetails.LocationName}
                                            </Typography>
                                            <Typography className="LocationDetailsDesc" sx={{
                                                color: "#fff",
                                                fontSize: "17px",
                                                lineHeight: "150%",
                                                fontWeight: "500",
                                                fontFamily: "Nunito",
                                                textAlign: 'center',
                                                mb: 1.5,
                                                display: 'block',
                                            }}>
                                                {locationDetails.Address}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Contact Home page Form*/}
                    <ContactForm />

                    {/* TCP Office */}
                    <Box
                        sx={{
                            width: "100%",
                            height: '350px',
                            overflow: "hidden",
                            mt: 5,
                        }}
                    >
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4609.344030276844!2d80.10122207572458!3d13.11099021180565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a3b499e4f%3A0xbc207b6a3df978e5!2sTCP%20INTERNATIONAL%20INC!5e1!3m2!1sen!2sin!4v1744008688148!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>
                </Box>
            </Container>

            {/* Footer */}
            <Footer />

        </>
    )
}

export default ContactPage;
