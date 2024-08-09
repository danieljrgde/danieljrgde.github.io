import { Box, Card, CardContent, CardHeader, Grid, Link, List, Typography } from "@mui/material"

import ExperienceListItem from "@portfolio/components/base/experience/ExperienceListItem";
import { Fragment } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "150px 1fr",
        rowGap: 2,
    },
    valueBox: {
        wordBreak: "break-word",
        overflowWrap: "break-word",
    }
};

const ExperiencesCard = ({ variant, experiences }) => {

    const { t } = useTranslation();
    const { title, display } = t(`components.ExperiencesCard.variants.${variant}`, { returnObjects: true });

    return (
        <Card>
            <CardHeader title={title} sx={styles.cardHeader} />
            <CardContent>

                {display === "list" && (
                    <List>
                        {experiences.map((experience, idx) => (
                            <ExperienceListItem
                                key={idx}
                                img={experience.img}
                                title={experience.title}
                                titleSuffix={experience.titleSuffix}
                                titleEndAdornment={experience.titleEndAdornment}
                                subheader={experience.subheader}
                                subheaderEndAdornment={experience.subheaderEndAdornment}
                                experience={experience}
                            />
                        ))}
                    </List>
                )}

                {display === "table" && (
                    <Grid sx={styles.gridContainer}>
                        {experiences.map((experience, idx) => (
                            <Fragment key={idx}>
                                <Typography variant="body2">{experience.key}</Typography>
                                <Box sx={styles.valueBox}>
                                    <Link
                                        href={experience.valueHref ? experience.valueHref : undefined}
                                        underline={experience.valueHref ? "hover" : "none" }
                                        sx={{ cursor: experience.valueHref ? "pointer" : "default" }}
                                        target="_blank" rel="noreferrer"
                                        variant="body2" color="text.secondary"
                                    >
                                        {experience.value}
                                    </Link>
                                </Box>
                            </Fragment>
                        ))}
                    </Grid>
                )}

            </CardContent>
        </Card>
    );
};

ExperiencesCard.propTypes = {
    variant: PropTypes.string,
    experiences: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string,
                attachments: PropTypes.arrayOf(
                    PropTypes.shape({
                        title: PropTypes.string,
                        link: PropTypes.string,
                        icon: PropTypes.string,
                    })
                ),
                title: PropTypes.string,
                titleSuffix: PropTypes.string,
                titleHref: PropTypes.string,
                titleEndAdornment: PropTypes.string,
                titleEndAdornmentIcon: PropTypes.string,
                subheader: PropTypes.string,
                subheaderEndAdornment: PropTypes.string,
                subheaderEndAdornmentIcon: PropTypes.string,
                intro: PropTypes.arrayOf(PropTypes.string),
                bulletPoints: PropTypes.arrayOf(PropTypes.string),
                technicalBulletPoints: PropTypes.arrayOf(PropTypes.string),
                outro: PropTypes.arrayOf(PropTypes.string),
                techStack: PropTypes.arrayOf(PropTypes.string),
            })
        ),
        PropTypes.arrayOf(
            PropTypes.shape({
                key: PropTypes.string,
                value: PropTypes.string,
                valueHref: PropTypes.string,
            })
        ),
    ]),
};

export default ExperiencesCard;