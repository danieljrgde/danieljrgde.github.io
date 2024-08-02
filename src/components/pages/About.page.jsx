import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const styles = {
    
};

const AboutPage = () => {

    const { t } = useTranslation();
    const paragraphs = t("components.AboutPage.paragraphs", { returnObjects: true });

    return (
        <Box>
            TESTE
            <Typography variant="h6" color="text.primary" paragraph>{t("components.AboutPage.greetings")}</Typography>
            {paragraphs.map((paragraph, idx) => <Typography key={idx} variant="body1" color="text.secondary" paragraph>{paragraph}</Typography>)}
        </Box>
    );
};

export default AboutPage;