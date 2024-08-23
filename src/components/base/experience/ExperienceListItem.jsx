import { Avatar, Box, ListItemButton, Typography, useMediaQuery } from "@mui/material";

import ExperienceModal from "@portfolio/components/base/experience/ExperienceModal";
import PropTypes from "prop-types";
import { useState } from "react";

const styles = {
    container: {
        display: "flex",
        gap: 2,
        flexGrow: 1,
        alignItems: "center",
    },
    contentBox: {
        flexGrow: 1,
    },
    headerLine: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    headerLineEndAdornment: {
        marginLeft: 2,
        minWidth: "fit-content",
    },
};


const ExperienceListItem = ({ img="", title="", titleSuffix="", titleEndAdornment="", subheader="", subheaderEndAdornment="", experience }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const isSmUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <Box sx={styles.container}>
                    {img && <Avatar variant="rounded" src={img} />}
                    <Box sx={styles.contentBox}>
                        <Box sx={styles.headerLine}>
                            <Box>
                                <Typography variant="body2" display="inline">{title}</Typography>
                                {titleSuffix && <Typography variant="body2" color="text.secondary" display="inline">,&nbsp;{titleSuffix}</Typography>}
                            </Box>
                            {isSmUp && <Typography variant="body2" color="text.secondary" sx={styles.headerLineEndAdornment}>{titleEndAdornment}</Typography>}
                        </Box>
                        <Box sx={styles.headerLine}>
                            <Typography variant="body2" color="text.secondary">{subheader}</Typography>
                            {isSmUp && <Typography variant="body2" color="text.secondary" sx={styles.headerLineEndAdornment}>{subheaderEndAdornment}</Typography>}
                        </Box>
                    </Box>
                </Box>
            </ListItemButton>
            {isModalOpen && <ExperienceModal
                open={isModalOpen}
                onClose={handleModal}
                img={experience.img}
                attachments={experience.attachments}
                title={experience.title}
                titleSuffix={experience.titleSuffix}
                titleHref={experience.titleHref}
                titleEndAdornment={experience.titleEndAdornment}
                titleEndAdornmentIcon={experience.titleEndAdornmentIcon}
                subheader={experience.subheader}
                subheaderEndAdornment={experience.subheaderEndAdornment}
                subheaderEndAdornmentIcon={experience.subheaderEndAdornmentIcon}
                intro={experience.intro}
                bulletPoints={experience.bulletPoints}
                technicalBulletPoints={experience.technicalBulletPoints}
                outro={experience.outro}
                techStack={experience.techStack}
            />}
        </>
    );
};

ExperienceListItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    titleSuffix: PropTypes.string,
    titleEndAdornment: PropTypes.string,
    subheader: PropTypes.string,
    subheaderEndAdornment: PropTypes.string,
    experience: PropTypes.shape({
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
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string),
        outro: PropTypes.arrayOf(PropTypes.string),
        techStack: PropTypes.arrayOf(PropTypes.string),
    })
};

export default ExperienceListItem;