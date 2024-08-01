import { Box, Card, CardContent, CardHeader, Grid, Link, Typography } from "@mui/material"

import { Fragment } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "150px 1fr",
        rowGap: 2,
    },
    linkBox: {
        wordBreak: "break-word",
        overflowWrap: "break-word",
    },
};

const BasicsCard = ({ basics }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader title={t("components.BasicsCard.title")} />
            <CardContent>
                <Grid sx={styles.gridContainer}>
                    {basics.map((basic, idx) => (
                        <Fragment key={idx}>
                            <Typography variant="body2">{basic.key}</Typography>
                            {basic.link ?
                                <Box sx={styles.linkBox}>
                                    <Link href={basic.link} target="_blank" rel="noreferrer" underline="hover" variant="body2" color="text.secondary">{basic.value}</Link>
                                </Box>
                            :
                                <Typography variant="body2" color="text.secondary">{basic.value}</Typography>
                            }
                        </Fragment>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

BasicsCard.propTypes = {
    basics: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            link: PropTypes.string
        }).isRequired
    ).isRequired
};

export default BasicsCard;