import { Card, CardHeader, CardContent, Grid, Typography, Link } from "@mui/material"
import { useTranslation } from 'react-i18next';

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "150px auto",
        rowGap: 2,
    }
};

const BasicsCard = () => {

    const { t } = useTranslation();
    const basics = t("basics");

    return (
        <Card>
            <CardHeader title={t("BasicsCard.title")} />
            <CardContent>
                <Grid sx={styles.gridContainer}>

                    <Typography variant="body1">{t("resume.sections.0.infos.0.key")}</Typography>
                    <Typography variant="body1" color="text.secondary">{t("resume.sections.0.infos.0.value")}</Typography>

                    <Typography variant="body1">{t("resume.sections.0.infos.1.key")}</Typography>
                    <Typography variant="body1" color="text.secondary">{t("resume.sections.0.infos.1.key")}</Typography>

                    <Typography variant="body1">Email</Typography>
                    <Link href="mailto:daniel.jrgde@gmail.com" target="_blank" rel="noreferrer" underline="hover" variant="body1" color="text.secondary">daniel.jrgde@gmail.com</Link>

                    <Typography variant="body1">LinkedIn</Typography>
                    <Link href="https://www.linkedin.com/in/danieljrgde/" target="_blank" rel="noreferrer" underline="hover" variant="body1" color="text.secondary">https://www.linkedin.com/in/danieljrgde/</Link>

                    <Typography variant="body1">GitHub</Typography>
                    <Link href="https://github.com/danieljrgde/" target="_blank" rel="noreferrer" underline="hover" variant="body1" color="text.secondary">https://github.com/danieljrgde/</Link>

                    <Typography variant="body1">Summary</Typography>
                    <Typography variant="body1" color="text.secondary">Experienced in AI research and the development of deep learning solutions. Passionate about learning and mastering AI concepts, with a demonstrated ability to navigate through technical and complex fields. Highly proficient in Python, skilled in writing clean, robust, and scalable code to design, engineer, and deploy machine learning systems.</Typography>

                </Grid>
            </CardContent>
        </Card>
    );
};

export default BasicsCard;