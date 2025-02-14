import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import ExperienceModal from "@portfolio/components/base/experience/ExperienceModal";
import PropTypes from 'prop-types';
import { useState } from "react";

const ProjectGridItem = ({ img, title, experience }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <Card>
            <CardActionArea onClick={handleModal}>
                <CardMedia
                    component="img" height={200}
                    src={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" fontWeight="bold">{title}</Typography>
                </CardContent>
            </CardActionArea>
            {isModalOpen && <ExperienceModal
                open={isModalOpen}
                onClose={handleModal}
                img={experience.img}
                attachments={experience.attachments}
                title={experience.title}
                titleHref={experience.titleHref}
                titleEndAdornment={experience.titleEndAdornment}
                titleEndAdornmentIcon={experience.titleEndAdornmentIcon}
                subheader={experience.subheader}
                subheaderEndAdornment={experience.subheaderEndAdornment}
                subheaderEndAdornmentIcon={experience.subheaderEndAdornmentIcon}
                intro={experience.intro}
                bulletPoints={experience.bulletPoints}
                outro={experience.outro}
                techStack={experience.techStack}
            />}
        </Card>
    );
};

ProjectGridItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
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
        outro: PropTypes.arrayOf(PropTypes.string),
        techStack: PropTypes.arrayOf(PropTypes.string),
    })
};

export default ProjectGridItem;