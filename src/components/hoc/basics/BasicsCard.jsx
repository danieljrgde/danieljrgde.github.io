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
                                <Link href={basic.link} target="_blank" rel="noreferrer" underline="hover" variant="body2" color="text.secondary">{basic.value}</Link>
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

export default BasicsCard;