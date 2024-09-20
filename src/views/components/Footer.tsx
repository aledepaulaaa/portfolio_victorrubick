import React from "react"
import { Box, Container, Grid, Typography, Link } from "@mui/material"
import { theme } from "../theme/theme";

export default function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: theme.palette.grey[200], p: 6, }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Aqui vai ser sobre seu négocio com VFX, empresa, agência, freelancer, algo que diz
                            sobre sua empresa.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rua Zueira, 123, Barueri - SP
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +55 11 9999-9999
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.linkedin.com/" color="inherit">
                            LinkedIn
                        </Link>
                        <br />
                        <Link href="https://www.instagram.com/" color="inherit">
                            Instagram
                        </Link>
                        <br />
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://www.google.com/">
                            Seu Site
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}