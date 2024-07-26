import { Avatar, CardHeader, Typography, ListItemButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const CertificateListItem = ({ certificate }) => {

    const { t } = useTranslation();

    return (
        <ListItemButton>
            <CardHeader
                sx={styles.cardHeader}
                avatar={<Avatar variant="rounded" src={certificate?.image} />}
                title={certificate?.title}
                subheader={certificate?.institution?.name}
                action={<Typography variant="body2" color="text.secondary">{certificate?.dateCompletion}</Typography>}
            />
        </ListItemButton>
    );
};

export default CertificateListItem;