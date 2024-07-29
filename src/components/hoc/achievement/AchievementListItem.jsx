import { Box, CardHeader, ListItemButton, Typography } from '@mui/material';

import AchievementModal from '@portfolio/components/hoc/achievement/AchievementModal';
import dayjs from 'dayjs';
import { useState } from 'react';

const styles = {
    container: {
        display: "flex",
    },
    headerBox: {
        flexGrow: 1,
    },
};

const AchievementListItem = ({ achievement }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev)
    };

    return (
        <>
            <ListItemButton onClick={handleModal} sx={styles.container}>
                <Box sx={styles.headerBox}>
                    <Typography variant="body2" display="inline">{achievement.title}</Typography>
                    {achievement.subheader && <Typography variant="body2" color="text.secondary" display="inline">,&nbsp;{achievement.subheader}</Typography>}
                </Box>
                <Typography variant="body2" color="text.secondary">{dayjs(achievement.date).format("MMM YYYY")}</Typography>
            </ListItemButton>
            <AchievementModal open={isModalOpen} onClose={handleModal} achievement={achievement} />
        </>
    );
};

export default AchievementListItem;