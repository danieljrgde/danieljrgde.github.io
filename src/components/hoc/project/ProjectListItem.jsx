import { Avatar, CardHeader, ListItemButton } from '@mui/material';

import ProjectModal from '@portfolio/components/hoc/project/ProjectModal';
import PropTypes from 'prop-types';
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
                />
            </ListItemButton>
            <ProjectModal open={isModalOpen} onClose={handleModal} project={project} />
        </>
    );
};

ProjectListItem.propTypes = {
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

export default ProjectListItem;