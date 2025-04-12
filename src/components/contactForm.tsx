import {
    Box,
    Button,
} from "@mui/material";
import * as React from "react";
import Grid from '@mui/material/Grid';

import { MenuItem, Select, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

function ContactForm() {
    const [phone, setPhone] = React.useState("");
    const [service, setService] = React.useState("");
    return <>
        <Box className="contact-container" sx={{ mt: 3 }}>
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
        </Box>
    </>
}

export default ContactForm;