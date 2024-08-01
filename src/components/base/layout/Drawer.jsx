import { Avatar, Box, Button, Drawer as DrawerMUI, Link, List, ListItemButton, ListItemText, Stack, Tooltip, Typography } from "@mui/material";

import DownloadIcon from '@mui/icons-material/Download';
import DownloadResumeModal from "@portfolio/components/base/DownloadResumeModal";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    downloadBtnBox: {
        marginTop: 8,
        display: "flex",
        justifyContent: 'center'
    }
};

const Drawer = ({ open, onClose }) => {

    const { t } = useTranslation();
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const tabs = t("components.Drawer.tabs", { returnObjects: true });
    
    
    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <DrawerMUI open={open} onClose={onClose} variant="temporary" anchor="left" sx={styles.container} >
            <Box sx={styles.headerContainer}>
                <Avatar variant="rounded" sx={styles.avatar} src={t("components.Drawer.img")} />
                <Typography variant="h5" fontWeight="bold">{t("components.Drawer.name")}</Typography>
                <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={3}>
                    <Tooltip title={t("components.Drawer.email.title")}><Link href={t("components.Drawer.email.link")} target="_blank" rel="noreferrer"><EmailIcon /></Link></Tooltip>
                    <Tooltip title={t("components.Drawer.linkedin.title")}><Link href={t("components.Drawer.linkedin.link")} target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                    <Tooltip title={t("components.Drawer.github.title")}><Link href={t("components.Drawer.github.link")} target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
                </Stack>
            </Box>

            <List>
                {tabs.map((tab, idx) => (
                    <ListItemButton key={idx} component={RouterLink} to={tab.to} onClick={onClose}>
                        <ListItemText primary={tab.label} />
                    </ListItemButton>
                ))}
            </List>
            
            <Box sx={styles.downloadBtnBox}>
                <Tooltip title={t("components.SideMenu.downloadResumeBtn.tooltip")}><Button onClick={handleModal} startIcon={<DownloadIcon />} variant="contained">{t("components.SideMenu.downloadResumeBtn.text")}</Button></Tooltip>
            </Box>
            <DownloadResumeModal open={isModalOpen} onClose={handleModal} />

        </DrawerMUI>
    );
};

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Drawer;