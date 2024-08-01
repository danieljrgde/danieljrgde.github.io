import { Card, CardContent, CardHeader, List } from "@mui/material"

import AchievementListItem from "@portfolio/components/hoc/achievement/AchievementListItem";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const AchievementsCard = ({ achievements }) => {

    const { t } = useTranslation();

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

AchievementsCard.propTypes = {
    achievements: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subheader: PropTypes.string,
            date: PropTypes.string.isRequired,
            paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};

export default AchievementsCard;