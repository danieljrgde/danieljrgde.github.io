import { Avatar, CardHeader, ListItemButton, Typography } from '@mui/material';
import EducationModal from '@portfolio/components/hoc/education/EducationModal';
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

export default EducationListItem;