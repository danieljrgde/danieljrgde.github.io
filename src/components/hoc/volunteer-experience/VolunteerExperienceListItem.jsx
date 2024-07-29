import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import dayjs from 'dayjs';
import { useState } from 'react';

import VolunteerExperienceModal from "@portfolio/components/hoc/volunteer-experience/VolunteerExperienceModal";


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

export default VolunteerExperienceListItem;