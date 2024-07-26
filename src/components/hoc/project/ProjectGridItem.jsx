import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
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
                    src="https://img.freepik.com/vecteurs-libre/ordinateur-portable-icone-isometrique-code-programme-developpement-logiciels-applications-programmation-neon-sombre_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=sph"
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