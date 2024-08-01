import { Avatar, Box, Card, CardContent, IconButton, Link, Modal, Stack, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import dayjs from "dayjs";

const styles = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "100%", md: "60dvw" },
        height: { xs: "100dvh", md: "auto" },
        maxHeight: { xs: "100dvh", md: "80dvh" },
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
    },
    closeBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: -1,
        marginTop: -1,
    },
    contentBox: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        flexGrow: 1,
        overflow: { xs: "auto", md: "hidden" },
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "100%", md: "25%" },
        flexShrink: 0,
    },
    detailBox: {
        width: { xs: "100%", md: "75%" },
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
        paddingBottom: 2,
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
    },
    courseworkBox: {
        py: 2,
        lineHeight: 0,
    }
};

const EducationModal = ({ open, onClose, education }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.closeBox}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>

                    <Box sx={styles.contentBox}>
                        <Box sx={styles.infoBox}>
                            <Avatar variant="rounded" sx={styles.avatar} src={education.institution.img} />
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={2}>
                                <Tooltip title={education.institution.website.title}><Link href={education.institution.website.link} target="_blank" rel="noreferrer"><LanguageIcon /></Link></Tooltip>
                                <Tooltip title={education.institution.linkedin.title}><Link href={education.institution.linkedin.link} target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                            </Stack>
                        </Box>

                        <Box sx={styles.detailBox}>
                            <Box sx={styles.innerDetailBox}>
                                <Box sx={styles.headerBox}>
                                    <Box sx={styles.spaceBetweenBox}>
                                        <Link href={education.institution.website.link} target="_blank" rel="noreferrer" underline="none" variant="h5" fontWeight="bold">{education.institution.name}</Link>
                                        <Typography variant="body2" color="text.secondary" sx={styles.dateTypography}>{dayjs(education.dateStart).format("MMM YYYY")} - {dayjs(education.dateEnd).isValid() ? dayjs(education.dateEnd).format("MMM YYYY") : education.dateEnd}</Typography>
                                    </Box>
                                    <Box sx={styles.spaceBetweenBox}>
                                        <Typography variant="body1" color="text.secondary">{education.degree} | {education.major}</Typography>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>{education.intro}</Typography>

                                <Box sx={styles.courseworkBox}>
                                    <Typography variant="body2" display="inline" fontWeight="bold">Coursework:&nbsp;</Typography>
                                    <Typography variant="body2" color="text.secondary" display="inline">{education.coursework.map((course, idx) => idx === education.coursework.length-1 ? `${course}.` : `${course}, `)}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

EducationModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    education: PropTypes.shape({
        degree: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        coursework: PropTypes.arrayOf(PropTypes.string).isRequired,
        institution: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired,
            linkedin: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string
            }).isRequired
        }).isRequired,
        dateStart: PropTypes.string.isRequired,
        dateEnd: PropTypes.string.isRequired
    }).isRequired
};

export default EducationModal;