import { Card, CardContent, CardHeader, Grid, Link, List, Typography } from "@mui/material"

import WorkExperienceListItem from "@portfolio/components/hoc/work-experience/WorkExperienceListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const WorkExperiencesCard = ({ workExperiences }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.WorkExperiencesCard.title")}
            />
            <CardContent>
                <List>
                    {workExperiences.map((workExperience, idx) => <WorkExperienceListItem key={idx} workExperience={workExperience} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

export default WorkExperiencesCard;