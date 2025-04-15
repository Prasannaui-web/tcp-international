import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
} from "@mui/material";

import NavLogo from "../assets/TCP LOGO.webp"

function Footer() {
    const pages = [
        { name: "Home", path: "/tcp-international/", id: "001" },
        { name: "About", path: "/tcp-international/about", id: "002" },
        { name: "Services", path: "/tcp-international/services", id: "003" },
        { name: "Projects", path: "/tcp-international/projects", id: "004" },
        { name: "Career", path: "/tcp-international/career", id: "005" },
        { name: "Contact", path: "/tcp-international/contact-us", id: "006" },
    ];

    return (
        <>
            <Box component='section' id="footer">
                <Container maxWidth='xl'>
                    {/* Footer Container */}
                    <Box className='logo-links' sx={{ display: 'flex', flexDirection: { md: 'column', lg: 'row', xs: 'column' }, alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #adadad', padding: '15px 0' }}>
                        <img src={NavLogo} alt="TCP International Logo" />
                        {/* Quick Links */}
                        <Box className='quicklinks'>
                            {pages.map((page) => (
                                <Button
                                    key={page.id}
                                    // onClick={handleCloseNavMenu}
                                    sx={{
                                        color: "#0d4291 !important",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        textTransform: "capitalize",
                                        fontFamily: "Nunito, sans-serif",
                                        margin: "0 8px",
                                        "&:hover": {
                                            background: "transparent",
                                            color: "#0d4291",
                                            fontWeight: "800",
                                        },
                                    }}
                                >
                                    <a href={page.path} style={{ color: '#0d4291' }}>
                                        {page.name}
                                    </a>
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    <Box
                        className="contactInfo"
                        sx={{
                            py: 5,
                            borderBottom: '1px solid #adadad',
                        }}
                    >
                        <Grid container spacing={4}>
                            {/* About Company */}
                            <Grid item xs={12} md={4}>
                                <Box className="about-company">
                                    <Typography
                                        sx={{
                                            color: '#0d4291',
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            textAlign: 'left',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Nunito, sans-serif',
                                            mb: 2,
                                        }}
                                    >
                                        About Company
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#484848',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            textTransform: 'capitalize',
                                            fontFamily: 'Nunito, sans-serif',
                                            maxWidth: '450px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Our company has a global presence with offices in the USA and India.
                                        Our expert team delivers top-notch 3D animation, web design,
                                        development, and tech support solutions.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Contact */}
                            <Grid item xs={12} md={4}>
                                <Box className="contact" textAlign={{ xs: 'left', md: 'center' }}>
                                    <Typography
                                        sx={{
                                            color: '#0d4291',
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            fontFamily: 'Nunito, sans-serif',
                                            mb: 2,
                                        }}
                                    >
                                        Contact
                                    </Typography>
                                    <Box className="contact-list">
                                        <Typography
                                            sx={{
                                                color: '#484848',
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                textTransform: 'capitalize',
                                                fontFamily: 'Nunito, sans-serif',
                                                mb: 1,
                                            }}
                                        >
                                            (+44) 123 456 789
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#484848',
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                textTransform: 'lowercase',
                                                fontFamily: 'Nunito, sans-serif',
                                            }}
                                        >
                                            info@example.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Address */}
                            <Grid item xs={12} md={4}>
                                <Box className="address" textAlign={{ xs: 'left', md: 'right' }}>
                                    <Typography
                                        sx={{
                                            color: '#0d4291',
                                            fontSize: '20px',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            fontFamily: 'Nunito, sans-serif',
                                            mb: 2,
                                        }}
                                    >
                                        Address
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#484848',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            textTransform: 'capitalize',
                                            fontFamily: 'Nunito, sans-serif',
                                            textAlign: { xs: 'left', md: 'right' },
                                        }}
                                    >
                                        SF 65/3, II Floor, MGPS Shopping Mall, <br />MG Colony, Marudamalai Main Road,
                                        <br />Vadavalli, Coimbatore - 641 041.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className='copyrights' sx={{ display: 'flex', justifyContent: 'space-between', py: 2, alignItems: 'center' }}>
                        <Box>
                            <Typography sx={{
                                color: "#484848 !important",
                                fontSize: "17px",
                                fontWeight: "700",
                                textTransform: "capitalize",
                                fontFamily: "Nunito, sans-serif",
                                margin: "0 8px",
                            }}>
                                © 2025 TCP International All Rights Reserved.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>
                            <Typography sx={{
                                color: "#0d4291 !important",
                                fontSize: "17px",
                                fontWeight: "700",
                                textTransform: "capitalize",
                                fontFamily: "Nunito, sans-serif",
                                margin: "0 8px",
                            }}>
                                Terms & Conditions
                            </Typography>
                            <Typography sx={{
                                color: "#0d4291 !important",
                                fontSize: "17px",
                                fontWeight: "700",
                                textTransform: "capitalize",
                                fontFamily: "Nunito, sans-serif",
                                margin: "0 8px",
                            }}>
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Box>
                </Container >
            </Box>
        </>
    )
}

export default Footer;