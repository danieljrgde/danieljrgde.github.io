import { Card, CardContent, CardHeader, List } from "@mui/material"

import VolunteerExperienceListItem from "@portfolio/components/hoc/volunteer-experience/VolunteerExperienceListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const VolunteerExperiencesCard = () => {

    const { t } = useTranslation();
    const volunteerExperiences = t("data.volunteerExperiences", { returnObjects: true });

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.VolunteerExperiencesCard.title")}
            />
            <CardContent>
                <List>
                    {volunteerExperiences.map((volunteerExperience, idx) => <VolunteerExperienceListItem key={idx} volunteerExperience={volunteerExperience} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

export default VolunteerExperiencesCard;