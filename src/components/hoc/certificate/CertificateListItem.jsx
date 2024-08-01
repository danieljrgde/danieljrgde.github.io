import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import CertificateModal from '@portfolio/components/hoc/certificate/CertificateModal';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
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

CertificateListItem.propTypes = {
    certificate: PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
        institution: PropTypes.shape({
            name: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        dateCompletion: PropTypes.string.isRequired,
        certificate: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired,
        course: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default CertificateListItem;