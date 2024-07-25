import { ListItem, Avatar, ListItemAvatar, ListItemText, CardHeader, Stack, Tooltip, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const EducationListItem = () => {
    return (
        <ListItem>
            <CardHeader
                sx={styles.cardHeader}
                avatar={<Avatar />}
                title="Master of Engineering (M.Eng) in Computer Science"
                subheader="Telecom Paris - Institutie Polytechnique de Paris"
                action={
                    <Stack direction="row" gap={0.5} alignItems="center">
                        <Tooltip title="Diploma"><Link href="projects"><SchoolIcon fontSize='small'/></Link></Tooltip>
                        <Tooltip title="School's website"><Link href="projects"><LanguageIcon fontSize='small'/></Link></Tooltip>
                    </Stack>
                }
            />
        </ListItem>
    );
};

export default EducationListItem;