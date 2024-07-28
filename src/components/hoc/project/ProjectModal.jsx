import { Avatar, Box, Card, CardContent, Chip, IconButton, Link, Modal, Stack, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

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
};

const ProjectModal = ({ open, onClose, project }) => {
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
                            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1}>
                                <Tooltip title="GitHub"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><GitHubIcon /></Link></Tooltip>
                                <Tooltip title="Report"><Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer"><InsertDriveFileIcon /></Link></Tooltip>
                            </Stack>
                        </Box>

                        <Box sx={styles.detailBox}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>{project.title}</Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>{project.description}</Typography>
                            <Typography variant="body1" color="text.secondary" fontWeight="bold" gutterBottom>Keywords:&nbsp;</Typography>
                            <Chip
                                avatar={<Avatar src="/static/images/avatar/1.jpg" />}
                                label="Pytorch" variant="outlined" size="small" clickable
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default ProjectModal;