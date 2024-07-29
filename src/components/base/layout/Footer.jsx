import React from 'react';
import { Container, Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box 
            sx={{
                bgcolor: 'primary.main', 
                color: 'white', 
                py: 3,
                mt: 5
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body2">
                            I'm a passionate developer with experience in building web applications using the latest technologies. I enjoy learning new things and sharing my knowledge with others.
                        </Typography>
                    </Grid>
                    
                    {/* Navigation Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">
                            Home
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Projects
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Blog
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Contact
                        </Link>
                    </Grid>
                    
                    {/* Social Media Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Me
                        </Typography>
                        <IconButton href="#" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <LinkedIn />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <GitHub />
                        </IconButton>
                    </Grid>
                </Grid>
                
                {/* Footer Bottom Text */}
                <Box mt={3} textAlign="center">
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
