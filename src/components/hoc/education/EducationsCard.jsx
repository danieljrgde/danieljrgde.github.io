import { Card, CardContent, CardHeader, List } from "@mui/material"

import EducationListItem from "@portfolio/components/hoc/education/EducationListItem";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    },
};

const EducationsCard = ({ educations }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.EducationsCard.title")}
            />
            <CardContent>
                <List>
                    {educations.map((education, idx) => <EducationListItem key={idx} education={education} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

EducationsCard.propTypes = {
    educations: PropTypes.arrayOf(
        PropTypes.shape({
            degree: PropTypes.string.isRequired,
            major: PropTypes.string.isRequired,
            intro: PropTypes.string.isRequired,
            coursework: PropTypes.arrayOf(PropTypes.string).isRequired,
            institution: PropTypes.shape({
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                website: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired
                }).isRequired,
                linkedin: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    link: PropTypes.string
                }).isRequired
            }).isRequired,
            dateStart: PropTypes.string.isRequired,
            dateEnd: PropTypes.string.isRequired
        })
    ).isRequired
};

export default EducationsCard;