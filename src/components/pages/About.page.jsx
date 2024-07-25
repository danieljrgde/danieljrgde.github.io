import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const styles = {
    
};

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <Box>
            <Typography variant="h6" color="text.primary" paragraph>{t("about.title")}</Typography>
            {t("about.paragraphs", { returnObjects: true }).map(p => <Typography variant="body1" color="text.secondary" paragraph>{p}</Typography>)}
        </Box>
    );
};

export default AboutPage;