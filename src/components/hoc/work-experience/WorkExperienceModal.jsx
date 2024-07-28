import { Avatar, Box, Card, CardContent, CardHeader, Chip, FormControlLabel, IconButton, Link, List, ListItem, Modal, Stack, Switch, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Vector from "@portfolio/components/base/Vector";
import { useTranslation } from "react-i18next";

const styles = {
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "100%", md: "60dvw" },
        height: { xs: "100dvh", md: "80dvh" },
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        maxHeight: "100%",
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
    cardHeader: {
        paddingTop: 0,
        paddingLeft: 0,
    },
    bulletPoints: {
        listStyleType: 'disc',
        pl: 5,
        '& .MuiListItem-root': {
            display: 'list-item',
            padding: 0
        },
    }
};

const WorkExperienceModal = ({ open, onClose, workExperience }) => {

    const { t } = useTranslation();
    const techStackMap = t("data.techStack", { returnObjects: true });

    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={styles.closeBox}>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>

                    <Box sx={styles.contentBox}>
                        <Box sx={styles.infoBox}>
                            <Avatar variant="rounded" sx={styles.avatar} src={workExperience.company.img} />
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1}>
                                <Tooltip title="GitHub"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
                                <Tooltip title="Report"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><InsertDriveFileIcon /></Link></Tooltip>
                            </Stack>
                            <FormControlLabel control={<Switch defaultChecked />} label="Technical jargon" />
                        </Box>

                        <Box sx={styles.detailBox}>
                            <CardHeader
                                sx={styles.cardHeader}
                                title={workExperience.company.name}
                                titleTypographyProps={{ fontWeight: "bold" }}
                                subheader={workExperience.role}
                                action={<Typography variant="body2" color="text.secondary">{workExperience.dateStart} - {workExperience.dateEnd}</Typography>}
                            />
                            <Typography variant="body2" color="text.secondary" gutterBottom>{workExperience.intro}</Typography>
                            <List sx={styles.bulletPoints}>
                                {workExperience.bulletPoints.map((bulletPoint, idx) => (
                                    <ListItem key={idx}>
                                        <Typography variant="body2" color="text.secondary">{bulletPoint}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                            {/* <Typography variant="body2" color="text.secondary" fontWeight="bold" display="inline" gutterBottom>Keywords:&nbsp;</Typography>
                            {workExperience.keywords.map((keyword, idx) => <Typography key={idx} variant="body2" color="text.secondary" display="inline" gutterBottom>{keyword}{idx === workExperience.keywords.length-1 ? "." : ", "}</Typography>)} */}
                            
                            <Box sx={{pt: 1}}>
                                {workExperience.techStack.map((tech, idx) => <Chip key={idx} avatar={<Vector variant="tech-stack" name={tech} />} label={techStackMap[tech]?.label} variant="outlined" size="small" clickable />)}
                            </Box>
                            
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default WorkExperienceModal;