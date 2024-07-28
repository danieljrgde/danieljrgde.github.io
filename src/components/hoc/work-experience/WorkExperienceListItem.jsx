import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

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

export default WorkExperienceListItem;