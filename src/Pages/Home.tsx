import {
  Box,
  Typography,
  Container,
  Card,
  Button,
} from "@mui/material";

import Grid from '@mui/material/Grid';

import NavBar from "../components/NavBar";
import About from "../components/About";
// import ContactForm from "../components/contactForm";
import Footer from "../components/Footer";


// import backgroundPattern from "../assets/header-bg-1.webp";
import HeroLandingImage from "../assets/HeroLandingImage.webp";
import WebApplication from "../assets/WebApplications_Expertise.webp";
import WebApplicationIcon from "../assets/WebApplications_Icon.webp";
import mobileApplication from "../assets/MobileApplications_Exp.webp";
import Animation from "../assets/VechileAnime_Expertise.webp";
import AnimationIcon from "../assets/VechileAnime.webp";
import WebDevImage from "../assets/WebDevelopment_Expertise.webp";
import WebDevIcon from "../assets/Webdevelopment.webp";
import serviceViusals from "../assets/ServiceVisuals.webp";
import clinicalVisuals from "../assets/ClinicalViusals_new.webp";
import MytoLabs from "../assets/MytoLabs_Project.webp";


// TECHNOLOGY Image

import maya from "../assets/softwares/New Tech Icons/maya.png";
import blender from "../assets/softwares/New Tech Icons/blender.png";
import afterEfects from "../assets/softwares/New Tech Icons/AfterEffects.png";
import react from "../assets/softwares/New Tech Icons/physics.png";
import node from "../assets/softwares/New Tech Icons/node-js.png";
import angular from "../assets/softwares/New Tech Icons/Angular.png";
import swift from "../assets/softwares/New Tech Icons/swift.png";
import nestJs from "../assets/softwares/New Tech Icons/nestJs.png";
import figma from "../assets/softwares/New Tech Icons/figma.png";
import unity from "../assets/softwares/New Tech Icons/unity.png";
import php from "../assets/softwares/New Tech Icons/php.png";
import html from "../assets/softwares/New Tech Icons/HTML.png";

// partners Images

import carquest from "../assets/CarQuest_Logo.webp";
import serviceviusuals from "../assets/service_visuals_Logo.webp";
import vvgaragge from "../assets/VVGarage.webp"
import clinicalvisuals from "../assets/CLINICAL VISUALS LOGO.webp"
import motovisuals from "../assets/motoVisuals_logo.webp"
import mytolabs from "../assets/MytoLabs - Logo.webp"


import "../css/index.css";
import ContactForm from "../components/contactForm";

function HomePage() {
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
      path: 'clinicalvisuals.com'
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

  const techImages = [{
    images: maya,
    title: "Maya"
  }, {
    images: blender,
    title: "Blender"
  }, {
    images: afterEfects,
    title: "After Effects"
  }, {
    images: react,
    title: "React"
  }, {
    images: node, title: "Node Js"
  }, {
    images: angular, title: "Angular"
  }, {
    images: swift, title: "Swift"
  }, {
    images: nestJs, title: "Nest Js"
  }, {
    images: figma, title: "Figma"
  }, {
    images: unity, title: "Unity"
  }, {
    images: php, title: "PHP"
  },
  {
    images: html, title: "HTML"
  }
  ];

  const partnersImages = [
    {
      images: carquest
    },
    {
      images: serviceviusuals
    },
    {
      images: vvgaragge
    },
    {
      images: clinicalvisuals
    },
    {
      images: mytolabs
    },
    {
      images: motovisuals
    },
  ];

  // const [phone, setPhone] = React.useState("");
  // const [service, setService] = React.useState("");
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <Box component="section" id="heroSection">
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "45px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                  fontFamily: "Nunito",
                  mb: 1.5,
                }}
              >
                Creating
                <span className="secondaryTextColor"> Digital Wonders </span>
                for Connected World
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "500 !important",
                  fontFamily: "Nunito",
                  mb: 2.5,
                  maxWidth: "580px",
                }}
              >
                We create custom web and mobile apps with stunning 3D
                animations, turning your ideas into impactful digital solutions.
                Let's make your vision a reality!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "auto",
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
                View Our Works
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center !important",
                width: "100%",
              }}
            >
              <img
                src={HeroLandingImage}
                alt="TCP Hero Laning Image"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box component="section" id="Expertise">
        <Container maxWidth="xl" style={{ textAlign: "center" }}>
          <Grid container spacing={2}>
            {/* Section Heading */}
            <Grid item xs={12} md={12} lg={12} sx={{ mb: 1.5 }}>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "700",
                  color: "#585858",
                  fontFamily: "Nunito",
                  mb: 1.5
                }}
              >
                We're Expertise in
              </Typography>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "center",
                  fontSize: "32px",
                  lineHeight: "1.4",
                  fontWeight: "800",
                  color: "#063A86",
                  fontFamily: "Nunito",
                  maxWidth: "650px",
                  margin: "0 auto",
                }}
              >
                Your <span className="secondaryTextColor">One-Stop Hub </span>
                for Digital Transformation and Visual Excellence
              </Typography>
            </Grid>
            {/* Expertise Card */}
            {/* Web Application */}
            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      className="innerCardHeading"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "#0d4291",
                        fontFamily: "Nunito",
                        textAlign: "left",
                        mb: 1.5,
                      }}
                    >
                      Web Applications
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        color: "#484848",
                        fontFamily: "Nunito",
                        textAlign: "left",
                      }}
                    >
                      TCP has a good experience in the web-site development
                      work. With more than 12 years' experience in designing,
                      developing and maintaining web applications and having
                      satisfied clients in UK & US.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ pt: 5 }}>
                    <img
                      src={WebApplication}
                      alt="Web Application"
                      style={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        display: "flex",
                        position: "relative",
                        bottom: 0,
                        borderTopLeftRadius: "350px",
                      }}
                    />
                    <img
                      src={WebApplicationIcon}
                      className="webAppIcon"
                      alt="WebAppplication Icon"
                    ></img>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* Mobile Application */}
            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  boxShadow: "0px 4px 4px rgba(0,0,0,0.15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={5} sx={{ pt: 5 }}>
                    <img
                      src={mobileApplication}
                      alt="Web Application"
                      style={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        display: "flex",
                        borderTopRightRadius: "350px",
                      }}
                    />
                    <img
                      src={WebApplicationIcon}
                      className="mobAppIcon"
                      alt="WebAppplication Icon"
                    ></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      className="innerCardHeading"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "#0d4291",
                        fontFamily: "Nunito",
                        textAlign: "right",
                        mb: 1.5,
                      }}
                    >
                      Mobile Applications
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        color: "#484848",
                        fontFamily: "Nunito",
                        textAlign: "right",
                      }}
                    >
                      Windows Mobile platform is the compact version of the
                      powerful desktop Windows operating system. Giving
                      developers the scalability and variety of options in
                      developing custom Windows Mobile.
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* Animation Application */}
            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      className="innerCardHeading"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "#0d4291",
                        fontFamily: "Nunito",
                        textAlign: "left",
                        mb: 1.5,
                      }}
                    >
                      {/* <h3> */}
                      Automobile/Medical Animations
                      {/* </h3> */}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        color: "#484848",
                        fontFamily: "Nunito",
                        textAlign: "left",
                      }}
                    >
                      With over 450 interactive or narrated animations showing
                      each vehicle part and system, the animations make complex
                      descriptions easy to explain and understand.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5} sx={{ pb: 5 }}>
                    <img
                      src={Animation}
                      alt="Web Application"
                      style={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        display: "flex",
                        borderBottomLeftRadius: "350px",
                      }}
                    />
                    <img
                      src={AnimationIcon}
                      className="AnimeIcon"
                      alt="WebAppplication Icon"
                    ></img>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* Animation Application */}
            <Grid item xs={12} md={12} lg={6}>
              <Card
                sx={{
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={5} sx={{ pb: 5 }}>
                    <img
                      src={WebDevImage}
                      alt="Web Application"
                      style={{
                        width: "100%",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        display: "flex",
                        borderBottomRightRadius: "350px",
                      }}
                    />
                    <img
                      src={WebDevIcon}
                      className="webDevIcon"
                      alt="WebAppplication Icon"
                    ></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      className="innerCardHeading"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "#0d4291",
                        fontFamily: "Nunito",
                        textAlign: "right",
                        mb: 1.5,
                      }}
                    >
                      {/* <h3> */}
                      Web Development
                      {/* </h3> */}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600 !important",
                        color: "#484848",
                        fontFamily: "Nunito",
                        textAlign: "right",
                      }}
                    >
                      TCP builds and maintains a company's digital brand image
                      by developing unique, customer centric web development
                      solutions that augment their corporate image.
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container >
      </Box >

      {/* Projects Section */}
      < Box component="section" id="Projects" >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {/* Section Heading */}
            <Grid item xs={12} md={12} lg={12} sx={{ mb: 2.5 }}>
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
                Our Latest Works
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
                }}
              >
                Discover How We{" "}
                <span className="secondaryTextColor">Transform Visions </span>{" "}
                into Cutting-Edge Innovation
              </Typography>
            </Grid>
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
                          color: "#fff",
                          fontFamily: "Nunito",
                        }}
                      >
                        {project.Category}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: "600",
                          color: "#fff",
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
        </Container >
      </Box >

      {/* About Section */}
      < About />

      {/* Technologies Section */}
      < Box component="section" id="technology" >
        <Container maxWidth="xl">
          <Grid container spacing={0} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Tech Left Column */}
            <Grid item xs={12} md={12} lg={6} sx={{ mb: 2.5, display: 'flex', flexDirection: 'column' }}>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "left",
                  fontSize: "24px",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  color: "#fff",
                  fontFamily: "Nunito",
                  mb: 2
                }}
              >
                Technology we used
              </Typography>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "left",
                  fontSize: "38px",
                  lineHeight: "1.4",
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily: "Nunito",

                }}
              >
                TCP is a company with expertise in building high quality multi platform software products and bespoke applications using the latest technologies.
              </Typography>
            </Grid>
            {/* Tech Right Column */}
            <Grid item xs={12} md={12} lg={6} sx={{ mb: 2.5 }}>
              <Grid container spacing={0} sx={{ width: '100%' }}>
                {techImages.map((techImages, index) => (
                  <Grid item key={index} xs={6} sm={6} md={3} lg={4} >
                    <Box style={{ backgroundColor: '#2B7DCD', padding: '24px', borderRadius: '16px', margin: '5px' }}>
                      <img
                        src={techImages.images}
                        alt={techImages.images}
                        style={{ width: "50px", marginBottom: "10px" }}

                      />
                      <Typography
                        className="sectionHeading"
                        sx={{
                          textAlign: "center",
                          fontSize: "20px",
                          lineHeight: "1.4",
                          fontWeight: "500",
                          color: "#fff",
                          wordWrap: 1,
                          fontFamily: "Nunito",

                        }}
                      >
                        {techImages.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box >

      {/* Our Trusted Partners */}
      < Box component="section" id="partners" >
        <Container maxWidth="lg" style={{ textAlign: "center" }}>
          <Grid container>
            {/* Section Heading */}
            <Grid item xs={12} md={12} lg={12} sx={{ mb: 2.5 }}>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "700",
                  color: "#585858",
                  fontFamily: "Nunito",
                  mb: 1
                }}
              >
                Our Trusted Partners
              </Typography>
              <Typography
                className="sectionHeading"
                sx={{
                  textAlign: "center",
                  fontSize: "32px",
                  lineHeight: "1.4",
                  fontWeight: "800",
                  color: "#063A86",
                  fontFamily: "Nunito",
                  maxWidth: "650px",
                  margin: "0 auto",
                }}
              >
                Collaborating with <span className="secondaryTextColor">leading innovators </span>
                to achieve excellence together
              </Typography>
            </Grid>
            {/* Section Heading */}
            <Grid container spacing={2}>
              {partnersImages.map((partnersImages, index) => (
                <Grid key={index} item xs={6} md={6} lg={4} >
                  <Box className="partners-container">
                    <Box className='slider-items'>
                      <img src={partnersImages.images} alt="partners Images" className="partners-img" />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box >

      {/* ContaactHome */}
      < Box component="section" id="contactHome" >
        <Container maxWidth='lg'>
          {/* Section Heading */}
          <Grid item xs={12} md={12} lg={12} sx={{ mb: 2.5 }}>
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
              Get in touch with us
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
              }}
            >
              Collaborating with <span className="secondaryTextColor">leading innovators </span>
              to achieve excellence together
            </Typography>
          </Grid>

          {/* Contact Home page Form*/}
          {/* <Box className="contact-container" sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} sx={{ mb: 1 }}>
                <TextField fullWidth label="Full Name" variant="outlined" className="custom-input" />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mb: 1 }}>
                <TextField fullWidth label="Email address" variant="outlined" className="custom-input" />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mb: 1 }}>
                <MuiTelInput
                  fullWidth
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="US"
                  label="Phone"
                  variant="outlined"
                  className="custom-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  fullWidth
                  displayEmpty
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  variant="outlined"
                  className="custom-select"
                >
                  <MenuItem value="">What project you looking for?</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="Mobile App">Mobile App</MenuItem>
                  <MenuItem value="3D Animation">3D Animation</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Message"
                  variant="outlined"
                  className="custom-input"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" className="submit-button" sx={{
                  width: "auto",
                  height: "auto",
                  padding: '13px 27px',
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  fontFamily: "Nunito, sans-serif",
                  background: "#2B7DCD",
                  borderRadius: "35px",
                  display: 'flex',
                  justifyContent: 'center',
                  boxShadow: "none",
                  margin: '0 auto',
                  textAlign: 'center'
                }}>
                  Submit form
                </Button>
              </Grid>
            </Grid>
          </Box> */}
          <ContactForm />
        </Container>
      </Box >

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
