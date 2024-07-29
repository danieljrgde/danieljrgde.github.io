import { Card, CardContent, CardHeader, Grid, Link, Typography } from "@mui/material"

import { Fragment } from "react";
import { useTranslation } from 'react-i18next';

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "150px auto",
        rowGap: 2,
    },
};

const SkillsCard = ({ skills }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader title={t("components.SkillsCard.title")} />
            <CardContent>
                <Grid sx={styles.gridContainer}>
                    {skills.map((skill, idx) => (
                        <Fragment key={idx}>
                            <Typography variant="body2">{skill.key}</Typography>
                            <Typography variant="body2" color="text.secondary">{skill.value}</Typography>
                        </Fragment>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SkillsCard;