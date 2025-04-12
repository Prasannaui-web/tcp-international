import {
    Box,
    Typography,
    Container,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/Project.css";



// Assets
import serviceViusals from "../assets/ServiceVisuals.webp";
import clinicalVisuals from "../assets/ClinicalViusals_new.png";
import MytoLabs from "../assets/MytoLabs_Project.webp";


function ProjectPage() {
    const projects = [
        {
            title: "Service Visuals",
            Category: "Automobiles",
            image: serviceViusals,
        },
        {
            title: "Clinical Visuals",
            Category: "Medical",
            image: clinicalVisuals,
        },
        {
            title: "MytoLabs",
            Category: "Medical",
            image: MytoLabs,
        },
        {
            title: "MytoLabs",
            Category: "Medical",
            image: MytoLabs,
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
                                Our Latest Projects
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
                                Discover our latest works, where innovation meets excellence across a diverse range of projects!
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* Projects Section */}
            < Box component="section" id="ProjectPage" sx={{ margin: "75px 0" }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        {/* Project Cards */}
                        <Container maxWidth="xl" sx={{ p: 0 }}>
                            <Grid container spacing={4}>
                                {projects.map((project, index) => (
                                    <Grid item key={index} xs={12} sm={12} md={6} lg={3}>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "450px",
                                                overflow: "hidden",
                                                position: "relative",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: "auto",
                                                    height: "98%",
                                                    backgroundImage: `url(${project.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center top",
                                                    backgroundRepeat: 'no-repeat',
                                                    transition: "background-position 3s ease-in-out",
                                                    cursor: "pointer",
                                                    border: "5px solid #2B7DCD",
                                                    borderRadius: "24px",
                                                }}
                                                onMouseEnter={(e) =>
                                                (e.currentTarget.style.backgroundPosition =
                                                    "center bottom")
                                                }
                                                onMouseLeave={(e) =>
                                                (e.currentTarget.style.backgroundPosition =
                                                    "center top")
                                                }
                                            />
                                        </Box>

                                        <Box sx={{ mt: 2, textAlign: "center" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontWeight: "600",
                                                    color: "#063a86",
                                                    fontFamily: "Nunito",
                                                }}
                                            >
                                                {project.Category}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "24px",
                                                    fontWeight: "800",
                                                    color: "#063a86",
                                                    fontFamily: "Nunito",
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
            </Box >

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProjectPage;
