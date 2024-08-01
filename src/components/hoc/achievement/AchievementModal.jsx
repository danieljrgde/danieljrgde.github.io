import { Box, Card, CardContent, IconButton, Link, Modal, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PropTypes from 'prop-types';
import dayjs from "dayjs";

const styles = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "100%", md: "40dvw" },
        height: { xs: "100dvh", md: "auto" },
        maxHeight: { xs: "100dvh", md: "80dvh" },
        display: "flex",
        flexDirection: "column",
    },
    closeBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: -1,
        marginTop: -1,
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "100%", md: "25%" },
        flexShrink: 0,
    },
    detailBox: {
        paddingRight: { xs: 2, md: 2 },
    },
    innerDetailBox: {
        overflow: { xs: "visible", md: "auto" },
        height: { md: "100%" },
    },
    avatar: {
        width: { xs: "65%", md: "85%" },
        maxWidth: "200px",
        height: "auto",
        aspectRatio: "1 / 1",
        borderRadius: "10%",
        marginBottom: 1,
    },
    cardContent: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
    headerBox: {
        paddingBottom: 4,
    },
    bulletPoints: {
        listStyleType: 'disc',
        pl: 5,
        '& .MuiListItem-root': {
            display: 'list-item',
            padding: 0
        },
    },
    techStackBox: {
        paddingTop: 3,
    },
    spaceBetweenBox: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    dateTypography: {
        marginLeft: 2,
        marginTop: 1,
        minWidth: "fit-content"
    }
};

const AchievementModal = ({ open, onClose, achievement }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.closeBox}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>

                    <Box sx={styles.detailBox}>
                        <Box sx={styles.innerDetailBox}>
                            <Box sx={styles.headerBox}>
                                <Box sx={styles.spaceBetweenBox}>
                                    <Typography variant="h5" fontWeight="bold">{achievement.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={styles.dateTypography}>{dayjs(achievement.date).format("MMM YYYY")}</Typography>
                                </Box>
                                <Box sx={styles.spaceBetweenBox}>
                                    <Link underline="none" variant="body1" color="text.secondary">{achievement.subheader}</Link>
                                </Box>
                            </Box>
                            {achievement.paragraphs.map((paragraph, idx) => <Typography key={idx} variant="body2" color="text.secondary" paragraph>{paragraph}</Typography>)}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

AchievementModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    achievement: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subheader: PropTypes.string,
        date: PropTypes.string.isRequired,
        paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default AchievementModal;