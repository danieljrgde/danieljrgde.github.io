import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import CertificateModal from '@portfolio/components/hoc/certificate/CertificateModal';
import { useState } from "react";

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const CertificateListItem = ({ certificate }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
                <CardHeader
                    sx={styles.cardHeader}
                    avatar={<Avatar variant="rounded" src={certificate.img} />}
                    title={certificate.title}
                    subheader={certificate.institution.name}
                    action={<Typography variant="body2" color="text.secondary">{dayjs(certificate.dateCompletion).format("MMM YYYY")}</Typography>}
                />
            </ListItemButton>
            <CertificateModal open={isModalOpen} onClose={handleModal} certificate={certificate} />
        </>
    );
};

export default CertificateListItem;