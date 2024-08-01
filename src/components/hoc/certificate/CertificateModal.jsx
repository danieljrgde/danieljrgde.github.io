import { Avatar, Box, Card, CardContent, FormControlLabel, IconButton, Link, List, ListItem, Modal, Stack, Switch, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from '@mui/icons-material/Description';
import { IsTechJargonContext } from '@portfolio/contexts/IsTechJargonContext';
import PropTypes from 'prop-types';
import SchoolIcon from '@mui/icons-material/School';
import dayjs from "dayjs";
import { useContext } from "react";

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
    }
};

const CertificateModal = ({ open, onClose, certificate }) => {
    
    const { isTechJargon, setIsTechJargon } = useContext(IsTechJargonContext);

    const handleTechJargon = (ev) => {
        setIsTechJargon(ev.target.checked);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.closeBox}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>

                    <Box sx={styles.contentBox}>
                        <Box sx={styles.infoBox}>
                            <Avatar variant="rounded" sx={styles.avatar} src={certificate.img} />
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={2}>
                                <Tooltip title={certificate.course.title}><Link href={certificate.course.link} target="_blank" rel="noreferrer"><SchoolIcon /></Link></Tooltip>
                                <Tooltip title={certificate.certificate.title}><Link href={certificate.certificate.link} target="_blank" rel="noreferrer"><DescriptionIcon /></Link></Tooltip>
                            </Stack>
                            <FormControlLabel control={<Switch checked={isTechJargon} onChange={handleTechJargon} />} label={<Typography variant="body2" color="text.secondary">Tech jargon</Typography>} />
                        </Box>

                        <Box sx={styles.detailBox}>
                            <Box sx={styles.innerDetailBox}>
                                <Box sx={styles.headerBox}>
                                    <Box sx={styles.spaceBetweenBox}>
                                        <Link href={certificate.course.link} target="_blank" rel="noreferrer" underline="none" variant="h5" fontWeight="bold">{certificate.title}</Link>
                                        <Typography variant="body2" color="text.secondary" sx={styles.dateTypography}>{dayjs(certificate.dateCompletion).format("MMM YYYY")}</Typography>
                                    </Box>
                                    <Box sx={styles.spaceBetweenBox}>
                                        <Link href={certificate.institution.website.link} target="_blank" rel="noreferrer" underline="none" variant="body1" color="text.secondary">{certificate.institution.name}</Link>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>{certificate.intro}</Typography>
                                <List sx={styles.bulletPoints}>
                                    {(isTechJargon ? certificate.technicalBulletPoints : certificate.bulletPoints).map((bulletPoint, idx) => (
                                        <ListItem key={idx}>
                                            <Typography variant="body2" color="text.secondary">{bulletPoint}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

CertificateModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    certificate: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        institution: PropTypes.shape({
            name: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        dateCompletion: PropTypes.string.isRequired,
        certificate: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired,
        course: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default CertificateModal;