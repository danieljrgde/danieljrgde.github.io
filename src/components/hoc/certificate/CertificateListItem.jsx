import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

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
                avatar={<Avatar variant="rounded" src={certificate.img} />}
                title={certificate.title}
                subheader={certificate.institution.name}
                action={<Typography variant="body2" color="text.secondary">{certificate.dateCompletion}</Typography>}
            />
        </ListItemButton>
    );
};

export default CertificateListItem;