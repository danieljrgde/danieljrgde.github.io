import { Card, CardContent, CardHeader, List } from "@mui/material"

import PropTypes from 'prop-types';
import VolunteerExperienceListItem from "@portfolio/components/hoc/volunteer-experience/VolunteerExperienceListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const VolunteerExperiencesCard = ({ volunteerExperiences }) => {

    const { t } = useTranslation();

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

VolunteerExperiencesCard.propTypes = {
    volunteerExperiences: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.shape({
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                website: PropTypes.shape({
                    title: PropTypes.string,
                    link: PropTypes.string
                }).isRequired,
                linkedin: PropTypes.shape({
                    title: PropTypes.string,
                    link: PropTypes.string
                }).isRequired
            }).isRequired,
            role: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            dateStart: PropTypes.string.isRequired,
            dateEnd: PropTypes.string.isRequired,
            intro: PropTypes.string.isRequired,
            bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            techStack: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};

export default VolunteerExperiencesCard;