import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import dayjs from 'dayjs';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const EducationListItem = ({ education }) => {
    return (
        <ListItemButton>
            <CardHeader
                sx={styles.cardHeader}
                avatar={<Avatar src={education.institution.img} />}
                title={`${education.degree} | ${education.major}`}
                subheader={`${education.institution.name}`}
                action={
                    <Typography variant="body2" color="text.secondary">{dayjs(education.dateStart).format("MMM YYYY")} - {dayjs(education.dateEnd).format("MMM YYYY")}</Typography>
                }
            />
        </ListItemButton>
    );
};

export default EducationListItem;