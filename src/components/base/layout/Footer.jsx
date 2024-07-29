import { Box, Container, Grid, IconButton, Link, Stack, Tooltip, Typography } from '@mui/material';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const styles = {
    container: {
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 3,
    },
};

const Footer = () => {

    const { t } = useTranslation();
    const links = t("components.Footer.links", { returnObjects: true });

    return (
        <Box sx={styles.container}>
            <Container maxWidth="xl">
                <Stack direction="column" gap={3} alignItems="center" justifyContent="center">
                    <Link component={RouterLink} to="/" underline="none" variant="h6" color="white" fontFamily="cursive" fontWeight="bold" sx={{ cursor: 'pointer' }}>{t("components.Footer.initials")}</Link>
                    <Stack direction="row" gap={3} alignItems="center" justifyContent="center">
                        {links.map((link, idx) => <Link key={idx} component={RouterLink} to={link.to} underline="hover" color="white">{link.label}</Link>)}
                    </Stack>
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                        <Tooltip title={t("components.Footer.contact.email.title")}><Link href={t("components.Footer.contact.email.link")} target="_blank" rel="noreferrer"><EmailIcon htmlColor='white' /></Link></Tooltip>
                        <Tooltip title={t("components.Footer.contact.linkedin.title")}><Link href={t("components.Footer.contact.linkedin.link")} target="_blank" rel="noreferrer"><LinkedInIcon htmlColor='white' /></Link></Tooltip>
                        <Tooltip title={t("components.Footer.contact.github.title")}><Link href={t("components.Footer.contact.github.link")} target="_blank" rel="noreferrer"><GitHubIcon htmlColor='white' /></Link></Tooltip>
                    </Stack>
                    <Typography variant="body2" color="inherit">&copy;&nbsp;{new Date().getFullYear()}&nbsp;{t("components.Footer.copyrights")}</Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
