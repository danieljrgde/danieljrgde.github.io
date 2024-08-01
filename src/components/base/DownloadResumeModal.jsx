import { Box, Button, Card, CardActions, CardContent, IconButton, Modal, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const styles = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "100%", md: "35dvw" },
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    cardContent: {
        paddingBottom: 3
    },
    closeBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: -1,
        marginTop: -1,
    },
};

const DownloadResumeModal = ({ open, onClose }) => {

    const { t } = useTranslation();

    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.closeBox}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>
                    <Typography variant="h6" gutterBottom>{t("components.DownloadResumeModal.title")}</Typography>
                    <Typography variant="body2" color="text.secondary">{t("components.DownloadResumeModal.corpus")}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" fullWidth>{t("components.DownloadResumeModal.notTechnicalBtnTxt")}</Button>
                    <Button variant="contained" fullWidth>{t("components.DownloadResumeModal.technicalBtnTxt")}</Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

DownloadResumeModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default DownloadResumeModal;