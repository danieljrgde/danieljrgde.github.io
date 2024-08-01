import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import WorkExperienceModal from "@portfolio/components/hoc/work-experience/WorkExperienceModal";
import dayjs from 'dayjs';
import { useState } from 'react';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};


const WorkExperienceListItem = ({ workExperience }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <CardHeader
                    sx={styles.cardHeader}
                    avatar={<Avatar src={workExperience.company.img} />}
                    title={workExperience.company.name}
                    subheader={workExperience.role}
                    action={<Typography variant="body2" color="text.secondary">{dayjs(workExperience.dateStart).format("MMM YYYY")} - {dayjs(workExperience.dateEnd).isValid() ? dayjs(workExperience.dateEnd).format("MMM YYYY") : workExperience.dateEnd}</Typography>}
                />
            </ListItemButton>
            <WorkExperienceModal open={isModalOpen} onClose={handleModal} workExperience={workExperience} />
        </>
    );
};


WorkExperienceListItem.propTypes = {
    workExperience: PropTypes.shape({
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string,
                link: PropTypes.string
            }).isRequired,
            linkedin: PropTypes.shape({
                title: PropTypes.string,
                link: PropTypes.string
            }).isRequired
        }).isRequired,
        role: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        dateStart: PropTypes.string.isRequired,
        dateEnd: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default WorkExperienceListItem;