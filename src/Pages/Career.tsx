import {
    Box,
    Typography,
    Container,
    TextField,
    Grid,
    Button, IconButton,
} from "@mui/material";
import * as React from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

import { MuiTelInput } from "mui-tel-input";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/contact.css";

function CareerPage() {
    const [phone, setPhone] = React.useState("");
    // const [service, setService] = React.useState("");

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,

    });

    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.files;
        if (selected) {
            const selectedFiles = Array.from(selected);
            setFiles((prev) => [...prev, ...selectedFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

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
                                Career Opportunities
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
                                Innovate, create, and grow with us in software development and 3D animation!
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth='lg'>
                <Box component='section' id='careerPage'>
                    {/* Contact Home page Form*/}
                    <Box className="contact-container" style={{ marginBottom: '75px' }}>
                        <Typography sx={{
                            fontSize: '28px',
                            fontWeight: '800',
                            fontFamily: 'Nunito,sans-serif',
                            color: '#0d4291',
                            mb: 3,
                        }}>
                            Please fill out the forms
                        </Typography>
                        <Grid container spacing={3}>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Full Name" variant="outlined" className="custom-input" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Email address" variant="outlined" className="custom-input" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
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
                                <TextField fullWidth label="Location" variant="outlined" className="custom-input" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Portfolio" variant="outlined" className="custom-input" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Experience" variant="outlined" className="custom-input" />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                        <Button
                                            component="label"
                                            variant="contained"
                                            startIcon={<CloudUploadIcon />}
                                            sx={{
                                                p: 1.5,
                                                backgroundColor: '#f1f1f1',
                                                color: '#212121',
                                                fontFamily: 'Nunito, sans-serif',
                                                fontWeight: 700,
                                            }}
                                        >
                                            Upload files
                                            <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
                                        </Button>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}>
                                            Upload attachments
                                        </Typography>
                                    </Box>

                                    {files.length > 0 && (
                                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                            {files.map((file, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        backgroundColor: '#fafafa',
                                                        p: 1, width: 'auto', height: '35px',
                                                        borderRadius: 1,
                                                        border: '1px solid #ddd',
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', fontFamily: 'Nunito, sans-serif', color: '#484848' }}>
                                                        {file.name}
                                                    </Typography>
                                                    <IconButton onClick={() => handleRemoveFile(index)} size="small">
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
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


                            <Grid item xs={12} sx={{ mt: 2 }}>
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
                    </Box>
                </Box>
            </Container >
            {/* Footer */}
            <Footer />

        </>
    )
}

export default CareerPage;
