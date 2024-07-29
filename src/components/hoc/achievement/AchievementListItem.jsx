import { Box, CardHeader, ListItemButton, Typography } from '@mui/material';

import AchievementModal from '@portfolio/components/hoc/achievement/AchievementModal';
import dayjs from 'dayjs';
import { useState } from 'react';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
    container: {
        display: "flex",
    },
    subheader: (subheader) => ({
        flexGrow: 1,
        visibility: subheader ? "visible" : "hidden"
    }),
};

const AchievementListItem = ({ achievement }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev)
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <CardHeader
                    sx={styles.cardHeader}
                    title={
                        <>
                            <Typography variant="body2" display="inline">{achievement.title}</Typography>
                            {achievement.subheader && <Typography variant="body2" color="text.secondary" display="inline">,&nbsp;{achievement.subheader}</Typography>}
                        </>
                    }
                    action={<Typography variant="body2" color="text.secondary">{dayjs(achievement.date).format("MMM YYYY")}</Typography>}
                />
                
            </ListItemButton>
            <AchievementModal open={isModalOpen} onClose={handleModal} achievement={achievement} />
        </>
    );
};

export default AchievementListItem;