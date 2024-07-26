import { Card, CardHeader, CardContent, Grid, Typography, Link, List } from "@mui/material"
import EducationListItem from "@portfolio/components/hoc/education/EducationListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const EducationsCard = () => {

    const { t } = useTranslation();
    const educations = t("educations.educations", { returnObjects: true });

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("EducationsCard.title")}
            />
            <CardContent>
                <List>
                    {educations.map((education, idx) => <EducationListItem key={idx} education={education} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

export default EducationsCard;