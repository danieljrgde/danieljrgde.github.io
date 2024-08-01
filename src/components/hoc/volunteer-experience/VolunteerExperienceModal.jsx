import { Avatar, Box, Card, CardContent, CardHeader, Chip, FormControlLabel, IconButton, Link, List, ListItem, Modal, Stack, Switch, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { IsTechJargonContext } from '@portfolio/contexts/IsTechJargonContext';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Vector from "@portfolio/components/base/Vector";
import dayjs from "dayjs";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

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
        overflow: { xs: "visible", md: "auto" },
        paddingRight: { xs: 2, md: 2 },
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
        alignItems: "center",
        justifyContent: "space-between",
    }
};

const VolunteerExperienceModal = ({ open, onClose, volunteerExperience }) => {

    const { t } = useTranslation();
    const { isTechJargon, setIsTechJargon } = useContext(IsTechJargonContext);
    const techStackMap = t("data.techStack", { returnObjects: true });

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
                            <Avatar variant="rounded" sx={styles.avatar} src={volunteerExperience.company.img} />
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={2}>
                                <Tooltip title={volunteerExperience.company.website.title}><Link href={volunteerExperience.company.website.link} target="_blank" rel="noreferrer"><LanguageIcon /></Link></Tooltip>
                                <Tooltip title={volunteerExperience.company.linkedin.title}><Link href={volunteerExperience.company.linkedin.link} target="_blank" rel="noreferrer"><LinkedInIcon /></Link></Tooltip>
                            </Stack>
                            <FormControlLabel control={<Switch checked={isTechJargon} onChange={handleTechJargon} />} label={<Typography variant="body2" color="text.secondary">Tech jargon</Typography>} />
                        </Box>

                        <Box sx={styles.detailBox}>
                            <Box sx={styles.headerBox}>
                                <Box sx={styles.spaceBetweenBox}>
                                    <Link href={volunteerExperience.company.website.link} target="_blank" rel="noreferrer" underline="none" variant="h5" fontWeight="bold">{volunteerExperience.company.name}</Link>
                                    <Typography variant="body2" color="text.secondary">{dayjs(volunteerExperience.dateStart).format("MMM YYYY")} - {dayjs(volunteerExperience.dateEnd).isValid() ? dayjs(volunteerExperience.dateEnd).format("MMM YYYY") : volunteerExperience.dateEnd}</Typography>
                                </Box>
                                <Box sx={styles.spaceBetweenBox}>
                                    <Typography variant="body1" color="text.secondary">{volunteerExperience.role}</Typography>
                                    <Typography variant="body2" color="text.secondary">{volunteerExperience.location}</Typography>
                                </Box>
                            </Box>

                            <Typography variant="body2" color="text.secondary" gutterBottom>{volunteerExperience.intro}</Typography>
                            <List sx={styles.bulletPoints}>
                                {(isTechJargon ? volunteerExperience.technicalBulletPoints : volunteerExperience.bulletPoints).map((bulletPoint, idx) => (
                                    <ListItem key={idx}>
                                        <Typography variant="body2" color="text.secondary">{bulletPoint}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                            
                            <Box sx={styles.techStackBox}>
                                {volunteerExperience.techStack.map((tech, idx) => (
                                    <Chip
                                        key={idx} label={techStackMap[tech]?.label} variant="outlined" size="small" clickable
                                        onClick={() => window.open(techStackMap[tech]?.link, "_blank")}
                                        avatar={<Vector variant="tech-stack" name={tech} />}
                                    />
                                ))}
                            </Box>
                            
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default VolunteerExperienceModal;