import  { CardHeader, TextField } from "@mui/material";

const styles = {
    cardHeader: {
        paddingTop: 0,
    },
};


const PublicationsPage = () => {
    return (
        <>
            <CardHeader
                sx={styles.cardHeader}
                title="Publications"
                titleTypographyProps={{ variant: "h4", fontWeight: 'bold', gutterBottom: true }}
                subheader="A brief description of publications overall"
                subheaderTypographyProps={{ variant: "body1", color: "text.secondary" }}
            />

           
        </>
    );
};

export default PublicationsPage;