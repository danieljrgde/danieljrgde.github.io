import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import VolunteerExperienceModal from "@portfolio/components/hoc/volunteer-experience/VolunteerExperienceModal";
import dayjs from 'dayjs';
import { useState } from 'react';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};


const VolunteerExperienceListItem = ({ volunteerExperience }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <CardHeader
                    sx={styles.cardHeader}
                    avatar={<Avatar src={volunteerExperience.company.img} />}
                    title={volunteerExperience.company.name}
                    subheader={volunteerExperience.role}
                    action={<Typography variant="body2" color="text.secondary">{dayjs(volunteerExperience.dateStart).format("MMM YYYY")} - {dayjs(volunteerExperience.dateEnd).isValid() ? dayjs(volunteerExperience.dateEnd).format("MMM YYYY") : volunteerExperience.dateEnd}</Typography>}
                />
            </ListItemButton>
            <VolunteerExperienceModal open={isModalOpen} onClose={handleModal} volunteerExperience={volunteerExperience} />
        </>
    );
};

VolunteerExperienceListItem.propTypes = {
    volunteerExperience: PropTypes.shape({
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string,
                link: PropTypes.string
            }),
            linkedin: PropTypes.shape({
                title: PropTypes.string,
                link: PropTypes.string
            })
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

export default VolunteerExperienceListItem;