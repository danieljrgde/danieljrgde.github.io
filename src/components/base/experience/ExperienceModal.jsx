import { Avatar, Box, Card, CardContent, CardHeader, Chip, IconButton, Link, List, ListItem, Modal, Stack, Tooltip, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import Icon from "@portfolio/components/base/Icon";
import PropTypes from "prop-types";
import Vector from "@portfolio/components/base/Vector";
import { useTranslation } from "react-i18next";

const styles = {
    container: {
        top: "50%",
        left: "50%",
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        transform: "translate(-50%, -50%)",
        width: { xs: "100dvw", md: "auto" },
        height: { xs: "100dvh", md: "auto" },
        maxWidth: theme => ({ xs: "100dvw", md: theme.breakpoints.values.md }),
        maxHeight: { xs: "100dvh", md: "80dvh" },
    },
    cardHeader: {
        paddingBottom: 0,
    },
    cardContent: {
        gap: 4,
        flexGrow: 1,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 4,
        display: "flex",
        overflow: { xs: "auto", md: "hidden" },
        flexDirection: { xs: "column", md: "row" },
    },
    infoPanel: {
        gap: "1rem",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "20%" },
        alignItems: { xs: "center", md: "flex-start" },
    },
    avatar: {
        width: "100%",
        maxWidth: theme => theme.breakpoints.values.md * 0.2,
        height: "auto",
        borderRadius: "10%",
        aspectRatio: "1 / 1",
        marginBottom: 1,
    },
    attachmentIcon: {
        cursor: "pointer",
    },
    contentBox: {
        maxHeight: "100%",
        overflow: { xs: "visible", md: "auto" },
    },
    innerContentBox: {
        overflow: { xs: "visible", md: "auto" },
        height: { md: "100%" },
    },
    contentHeader: {
        padding: 0,
    },
    contentAdornmentsBox: {
        display: "flex", 
        gap: 2,
        paddingTop: 3,
    },
    contentAdornment: {
        display: "flex",
        gap: 0.5,
    },
    contentIntroBox: {
        paddingTop: 3,
    },
    contentBulletPointsContainer: {
        listStyleType: "disc",
        paddingLeft: 5,
    },
    contentBulletPoint: {
        display: "list-item",
        padding: 0,
    },
    contentTechStackBox: {
        paddingTop: 3,
        paddingBottom: 3,
    },
};

const ExperienceModal = ({ 
    open, 
    onClose,
    img = "",
    attachments = [],
    title = "",
    titleSuffix = "",
    titleHref = "",
    titleEndAdornment = "",
    titleEndAdornmentIcon = "",
    subheader = "",
    subheaderEndAdornment = "",
    subheaderEndAdornmentIcon = "",
    intro = [],
    bulletPoints = [],
    outro = [],
    techStack = []
}) => {

    const { t } = useTranslation();
    const techStackMap = t("data.techStack", { returnObjects: true });


    /*------------------------------*/
    /*--- RENDER FUNCTIONS ---------*/
    /*------------------------------*/

    const renderInfoPanel = () => (
        <Box sx={styles.infoPanel}>
            <Avatar variant="rounded" src={img} sx={styles.avatar} />
            <Stack direction="row" gap={0.5} alignItems="center" justifyContent="center" marginTop={1} marginBottom={2} width="100%">
                {attachments.map((attachment, idx) => (
                    <Tooltip key={idx} title={attachment.title}>
                        <Icon name={attachment.icon} onClick={() => window.open(attachment.href, "_blank")} sx={styles.attachmentIcon} />
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    );

    const renderContentHeader = () => (
        <CardHeader
            sx={styles.contentHeader}
            title={<Link href={titleHref} target="_blank" rel="noreferrer" underline="none" variant="h5" fontWeight="bold">{title}</Link>}
            subheader={<Typography variant="body1" color="text.secondary">{subheader || titleSuffix}</Typography>}
        />
    );

    const renderAdornments = () => (
        <Box sx={styles.contentAdornmentsBox}>
            {titleEndAdornment && (
                <Box sx={styles.contentAdornment}>
                    <Icon name={titleEndAdornmentIcon} fontSize="small" />
                    <Typography variant="body2" color="text.secondary" sx={styles.contentHeaderEndAdornment}>{titleEndAdornment}</Typography>
                </Box>
            )}
            {subheaderEndAdornment && (
                <Box sx={styles.contentAdornment}>
                    <Icon name={subheaderEndAdornmentIcon} fontSize="small" />
                    <Typography variant="body2" color="text.secondary" sx={styles.contentHeaderEndAdornment}>{subheaderEndAdornment}</Typography>
                </Box>
            )}
        </Box>
    );

    const renderContentIntro = () => (
        <Box sx={styles.contentIntroBox}>
            {intro.map((paragraph, idx) => <Typography key={idx} variant="body2" color="text.secondary" paragraph>{paragraph}</Typography>)}
        </Box>
    );

    const renderContentBulletPoints = () => (
        <List sx={styles.contentBulletPointsContainer}>
            {bulletPoints.map((bulletPoint, idx) => (
                <ListItem key={idx} sx={styles.contentBulletPoint}>
                    <Typography variant="body2" color="text.secondary">{bulletPoint}</Typography>
                </ListItem>
            ))}
        </List>
    );

    const renderContentOutro = () => (
        <Box sx={styles.contentOutroBox}>
            {outro.map((paragraph, idx) => <Typography key={idx} variant="body2" color="text.secondary" paragraph>{paragraph}</Typography>)}
        </Box>
    );

    const renderContentTechStack = () => (
        <Box sx={styles.contentTechStackBox}>
            {techStack.map((tech, idx) => (
                <Chip
                    key={idx} label={techStackMap[tech]?.label} variant="outlined" size="small" clickable
                    onClick={() => window.open(techStackMap[tech]?.link, "_blank")}
                    avatar={<Vector variant="tech-stack" name={tech} />}
                />
            ))}
        </Box>
    );

    return (
        <Modal open={open} onClose={onClose}>
            <Card sx={styles.container}>
                <CardHeader
                    sx={styles.cardHeader}
                    action={<IconButton onClick={onClose}><CloseIcon /></IconButton>}
                />
                <CardContent sx={styles.cardContent}>
                    {img && attachments && renderInfoPanel()}
                    <Box sx={styles.contentBox}>
                        <Box sx={styles.innerContentBox}>
                            {renderContentHeader()}
                            {(titleEndAdornment || subheaderEndAdornment) && renderAdornments()}
                            {intro && renderContentIntro()}
                            {bulletPoints && renderContentBulletPoints()}
                            {outro && renderContentOutro()}
                            {techStack && renderContentTechStack()}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );
};

ExperienceModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    img: PropTypes.string,
    attachments: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string,
            icon: PropTypes.string,
        })
    ),
    title: PropTypes.string,
    titleSuffix: PropTypes.string,
    titleHref: PropTypes.string,
    titleEndAdornment: PropTypes.string,
    titleEndAdornmentIcon: PropTypes.string,
    subheader: PropTypes.string,
    subheaderEndAdornment: PropTypes.string,
    subheaderEndAdornmentIcon: PropTypes.string,
    intro: PropTypes.arrayOf(PropTypes.string),
    bulletPoints: PropTypes.arrayOf(PropTypes.string),
    outro: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ExperienceModal;