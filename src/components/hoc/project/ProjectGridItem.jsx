import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import ProjectModal from "@portfolio/components/hoc/project/ProjectModal";
import PropTypes from 'prop-types';
import { useState } from "react";

const styles = {
    clampTypography: {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
    }
} 


const ProjectGridItem = ({ project }) => {

    const [ openModal, setOpenModal ] = useState(false);

    const handleModal = () => {
        setOpenModal(prev => !prev);
    };

    return (
        <Card>
            <CardActionArea onClick={handleModal}>
                <CardMedia
                    component="img" height={200}
                    src={project.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" fontWeight="bold">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={styles.clampTypography}>{project.description}</Typography>
                </CardContent>
            </CardActionArea>
            <ProjectModal open={openModal} onClose={handleModal} project={project} />
        </Card>
    );
};

ProjectGridItem.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        report: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired,
        github: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string
        }).isRequired,
        intro: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
};

export default ProjectGridItem;