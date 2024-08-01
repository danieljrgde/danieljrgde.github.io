import { Box, ListItemButton, Typography } from '@mui/material';

import AchievementModal from '@portfolio/components/hoc/achievement/AchievementModal';
import PropTypes from 'prop-types';
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

    const [isModalOpen, setIsModalOpen] = useState(false);

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

AchievementListItem.propTypes = {
    achievement: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subheader: PropTypes.string,
        date: PropTypes.string.isRequired,
        paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default AchievementListItem;