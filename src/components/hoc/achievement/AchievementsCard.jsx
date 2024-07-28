import { Card, CardContent, CardHeader, Grid, Link, List, Typography } from "@mui/material"

import AchievementListItem from "@portfolio/components/hoc/achievement/AchievementListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const AchievementsCard = () => {

    const { t } = useTranslation();
    const achievements = t("data.achievements", { returnObjects: true });

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.AchievementsCard.title")}
            />
            <CardContent>
                <List>
                    {achievements.map((achievement, idx) => <AchievementListItem key={idx} achievement={achievement} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

export default AchievementsCard;