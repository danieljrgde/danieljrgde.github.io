import { Modal, Card } from "@mui/material";

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    cardContainer: {
        position: 'relative',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto',
        padding: '20px',
        outline: 'none',
    },
};

const WorkExperienceModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} sx={styles.container}>
            <Card sx={styles.cardContainer}>
                Teste
            </Card>
        </Modal>
    )
};

export default WorkExperienceModal;