import { Avatar, Box, Card, CardContent, Chip, FormControlLabel, IconButton, Link, List, ListItem, Modal, Stack, Switch, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IsTechJargonContext } from '@portfolio/contexts/IsTechJargonContext';
import PropTypes from 'prop-types';
import Vector from "@portfolio/components/base/Vector";
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
        alignItems: "center",
        justifyContent: "space-between",
    }
};

const ProjectModal = ({ open, onClose, project }) => {

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
                            <Avatar variant="rounded" sx={styles.avatar} src={project.img} />
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={2}>
                                {project.github.link && <Tooltip title={project.github.title}><Link href={project.github.link} target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>}
                                {project.report.link && <Tooltip title={project.report.title}><Link href={project.report.link} target="_blank" rel="noreferrer"><DescriptionIcon /></Link></Tooltip>}
                            </Stack>
                            <FormControlLabel control={<Switch checked={isTechJargon} onChange={handleTechJargon} />} label={<Typography variant="body2" color="text.secondary">Tech jargon</Typography>} />
                        </Box>

                        <Box sx={styles.detailBox}>
                            <Box sx={styles.innerDetailBox}>
                                <Box sx={styles.headerBox}>
                                    <Box sx={styles.spaceBetweenBox}>
                                        <Link href={project.github.link} target="_blank" rel="noreferrer" underline="none" variant="h5" fontWeight="bold">{project.title}</Link>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="text.secondary" gutterBottom>{project.intro}</Typography>
                                <List sx={styles.bulletPoints}>
                                    {(isTechJargon ? project.technicalBulletPoints : project.bulletPoints).map((bulletPoint, idx) => (
                                        <ListItem key={idx}>
                                            <Typography variant="body2" color="text.secondary">{bulletPoint}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                                
                                <Box sx={styles.techStackBox}>
                                    {project.techStack.map((tech, idx) => (
                                        <Chip
                                            key={idx} label={techStackMap[tech]?.label} variant="outlined" size="small" clickable
                                            onClick={() => window.open(techStackMap[tech]?.link, "_blank")}
                                            avatar={<Vector variant="tech-stack" name={tech} />}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

ProjectModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
        img: PropTypes.string.isRequired,
        github: PropTypes.shape({
            link: PropTypes.string,
            title: PropTypes.string
        }).isRequired,
        report: PropTypes.shape({
            link: PropTypes.string,
            title: PropTypes.string
        }).isRequired,
        title: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default ProjectModal;