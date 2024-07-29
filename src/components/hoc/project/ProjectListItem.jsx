import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import ProjectModal from '@portfolio/components/hoc/project/ProjectModal';
import { useState } from "react";

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const ProjectListItem = ({ project }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <CardHeader
                    sx={styles.cardHeader}
                    avatar={<Avatar variant="rounded" src={project.img} />}
                    title={project.title}
                    // subheader={project.institution.name}
                    // action={<Typography variant="body2" color="text.secondary">{dayjs(project.dateCompletion).format("MMM YYYY")}</Typography>}
                />
            </ListItemButton>
            <ProjectModal open={isModalOpen} onClose={handleModal} project={project} />
        </>
    );
};

export default ProjectListItem;