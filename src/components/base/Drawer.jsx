import { Drawer as DrawerMUI, Avatar, Typography, Stack, Tooltip, Link, Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ProfileImg from "@portfolio/assets/imgs/profile.jpg";
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import ScienceIcon from '@mui/icons-material/Science';

const styles = {
    container: {
        width: "300px",
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: "300px",
            boxSizing: 'border-box',
        },
    },
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
    },
    avatar: {
        width: "65%",
        height: "auto",
        aspectRatio: "1 / 1",
        marginBottom: 2,
        borderRadius: "10%",
    },
};

const Drawer = ({ open, onClose }) => {
    return (
        <DrawerMUI open={open} onClose={onClose} variant="temporary" anchor="left" sx={styles.container} >
            <Box sx={styles.headerContainer}>
                <Avatar variant="rounded" sx={styles.avatar} src={ProfileImg} />
                <Typography variant="h6" fontWeight="bold">Daniel J. Deutsch</Typography>
                <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={3}>
                    <Tooltip title="Email"><Link href="mailto:daniel.jrgde@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></Link></Tooltip>
                    <Tooltip title="LinkedIn"><Link href="https://www.linkedin.com/in/danieljrgde/" target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                    <Tooltip title="GitHub"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
                </Stack>
            </Box>

            <List>
                <ListItemButton component={RouterLink} to="/" onClick={onClose}>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/publications" onClick={onClose}>
                    <ListItemIcon><ScienceIcon /></ListItemIcon>
                    <ListItemText primary="Publications" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/projects" onClick={onClose}>
                    <ListItemIcon><ConstructionIcon /></ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/resume" onClick={onClose}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItemButton>
            </List>

        </DrawerMUI>
    );
};

export default Drawer;