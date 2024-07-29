import { Box, Avatar, Typography, Stack, Tooltip, Link, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from "react-i18next";
import DownloadIcon from '@mui/icons-material/Download';
import DownloadResumeModal from "@portfolio/components/base/DownloadResumeModal";
import { useState } from "react";


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
        borderRadius: "10%",
    },
};

const SideMenu = () => {

    const { t } = useTranslation();
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    
    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <Box sx={styles.container}>
            <Avatar variant="rounded" sx={styles.avatar} src={t("components.SideMenu.img")} />
            <Typography variant="h5" fontWeight="bold">{t("components.SideMenu.name")}</Typography>
            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={3}>
                <Tooltip title={t("components.SideMenu.email.title")}><Link href={t("components.SideMenu.email.link")} target="_blank" rel="noreferrer"><EmailIcon /></Link></Tooltip>
                <Tooltip title={t("components.SideMenu.linkedin.title")}><Link href={t("components.SideMenu.linkedin.link")} target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                <Tooltip title={t("components.SideMenu.github.title")}><Link href={t("components.SideMenu.github.link")} target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
            </Stack>
            <Tooltip title={t("components.SideMenu.downloadResumeBtn.tooltip")}><Button onClick={handleModal} startIcon={<DownloadIcon />} variant="contained">{t("components.SideMenu.downloadResumeBtn.text")}</Button></Tooltip>
            <DownloadResumeModal open={isModalOpen} onClose={handleModal} />
        </Box>
    );
};

export default SideMenu;