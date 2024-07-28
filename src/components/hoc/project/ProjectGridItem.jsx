import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import ProjectModal from "@portfolio/components/hoc/project/ProjectModal";
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

export default ProjectGridItem;