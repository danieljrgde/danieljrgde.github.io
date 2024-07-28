import { Box, CardHeader, ListItemButton, Typography } from '@mui/material';

import dayjs from 'dayjs';

const styles = {
    container: {
        display: "flex",
    },
    subheader: (subheader) => ({
        flexGrow: 1,
        visibility: subheader ? "visible" : "hidden"
    }),
};

const AchievementListItem = ({ achievement }) => {
    return (
        <ListItemButton sx={styles.container}>
            <Typography variant="body2">{achievement.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={styles.subheader(achievement.subheader)}>,&nbsp;{achievement.subheader}</Typography>
            <Typography variant="body2" color="text.secondary">{dayjs(achievement.date).format("MMM YYYY")}</Typography>
        </ListItemButton>
    );
};

export default AchievementListItem;