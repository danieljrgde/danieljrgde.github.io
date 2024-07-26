import { Avatar, CardHeader, Typography, ListItemButton } from '@mui/material';

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
                avatar={<Avatar src={education?.institution?.image} />}
                title={`${education?.degree} | ${education?.major}`}
                subheader={`${education?.institution?.name}`}
                action={
                    <Typography variant="body2" color="text.secondary">{education?.dateStart} - {education?.dateEnd}</Typography>
                }
            />
        </ListItemButton>
    );
};

export default EducationListItem;