import { Card, CardContent, CardHeader, List } from "@mui/material"

import PropTypes from 'prop-types';
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

WorkExperiencesCard.propTypes = {
    workExperiences: PropTypes.arrayOf(
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

export default WorkExperiencesCard;