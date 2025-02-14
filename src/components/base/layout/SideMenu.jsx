import { Avatar, Box, Button, Link, Stack, Tooltip, Typography } from "@mui/material";

import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from "react";
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
        borderRadius: "10%",
    },
};

const SideMenu = () => {

    const { t, i18n } = useTranslation();
    const resumePaths = t("components.SideMenu.resume", { returnObjects: true });

    const handleResume = () => {
        console.log(resumePaths)
        window.open(resumePaths[i18n.language], '_blank');
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
            <Button onClick={handleResume} startIcon={<DownloadIcon />} variant="contained">{t("components.SideMenu.downloadResumeBtn.text")}</Button>
        </Box>
    );
};

export default SideMenu;