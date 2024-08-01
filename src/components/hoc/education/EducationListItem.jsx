import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';

import EducationModal from '@portfolio/components/hoc/education/EducationModal';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from "react";

const styles = {
    cardHeader: {
        flexGrow: 1,
        padding: 0,
    },
};

const EducationListItem = ({ education }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModal = (ev) => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <>
            <ListItemButton onClick={handleModal}>
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
            <EducationModal open={isModalOpen} onClose={handleModal} education={education} />
        </>
    );
};

EducationListItem.propTypes = {
    education: PropTypes.shape({
        degree: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        coursework: PropTypes.arrayOf(PropTypes.string).isRequired,
        institution: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            website: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired,
            linkedin: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string
            }).isRequired
        }).isRequired,
        dateStart: PropTypes.string.isRequired,
        dateEnd: PropTypes.string.isRequired
    }).isRequired
};

export default EducationListItem;