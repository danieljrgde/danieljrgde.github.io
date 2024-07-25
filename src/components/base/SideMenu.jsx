import { Box, Avatar, Typography, Stack, Tooltip, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from "react-i18next";

const styles = {
    container: {
        position: "sticky",
        top: "96px",
        display: { xs: 'none', md: 'flex' },
        flexDirection: "column",
        justifyContent: 'start',
        alignItems: 'center',
        flexBasis: "25%",
        flexShrink: 0,
        alignSelf: "flex-start",
        maxHeight: "calc(100dvh - 96px)",
        overflowY: "auto",
    },
    avatar: {
        width: "85%",
        height: "auto",
        aspectRatio: "1 / 1",
        marginBottom: 2,
    }
};

const SideMenu = () => {

    const { t } = useTranslation();

    return (
        <Box sx={styles.container}>
            <Avatar variant="rounded" sx={styles.avatar} />
            <Typography variant="h5" fontWeight="bold">Daniel J. Deutsch</Typography>
            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={3}>
                <Tooltip title="Email"><Link href="mailto:daniel.jrgde@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></Link></Tooltip>
                <Tooltip title="LinkedIn"><Link href="https://www.linkedin.com/in/danieljrgde/" target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                <Tooltip title="GitHub"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
            </Stack>
            <Typography variant="body2" color="text.secondary">{t("side-menu.contact-me-text")}</Typography>
        </Box>
    );
};

export default SideMenu;