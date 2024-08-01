import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"

import { Fragment } from "react";
import PropTypes from 'prop-types';
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

SkillsCard.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default SkillsCard;