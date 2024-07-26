import { Card, CardHeader, CardContent, Grid, Typography, Link, List } from "@mui/material"
import WorkExperienceListItem from "@portfolio/components/hoc/work-experience/WorkExperienceListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const WorkExperiencesCard = () => {

    const { t } = useTranslation();
    const workExperiences = t("workExperience");

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("WorkExperiencesCard.title")}
            />
            <CardContent>
                <List>
                    <WorkExperienceListItem />
                    <WorkExperienceListItem />
                    <WorkExperienceListItem />
                </List>           
            </CardContent>
        </Card>
    );
};

export default WorkExperiencesCard;