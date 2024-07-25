import { Box, ListItem, Avatar, CardHeader, CardContent, Typography, List, ListItemButton } from '@mui/material';
import WorkExperienceModal from "@portfolio/components/hoc/resume/work-experience/WorkExperienceModal";
import { useState } from 'react';


const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};


const WorkExperienceListItem = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <ListItemButton onClick={handleModal}>
            <CardHeader
                sx={styles.cardHeader}
                avatar={<Avatar />}
                title="AI Research Engineer"
                subheader="VO2 Group"
                action={<Typography variant="body1" color="text.secondary">Sep 2023 - Present</Typography>}
            />
            <WorkExperienceModal open={isModalOpen} onClose={handleModal} />
        </ListItemButton>
    );
};

export default WorkExperienceListItem;