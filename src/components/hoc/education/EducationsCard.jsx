import { Card, CardContent, CardHeader, Grid, Link, List, Typography } from "@mui/material"

import EducationListItem from "@portfolio/components/hoc/education/EducationListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
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

export default EducationsCard;