import ProjectGridItem from "@portfolio/components/hoc/project/ProjectGridItem";
import { Box, Typography, Grid, CardHeader } from "@mui/material";

const styles = {
    cardHeader: {
        paddingTop: 0,
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 1,
    },
};

const ProjectsPage = () => {
    return (
        <>
            <CardHeader
                sx={styles.cardHeader}
                title="Projects"
                titleTypographyProps={{ variant: "h4", fontWeight: 'bold' }}
                subheader="A brief description of projects overall"
                subheaderTypographyProps={{ variant: "body1", color: "text.secondary" }}
            />

            <Grid sx={styles.gridContainer}>
                <ProjectGridItem />
                <ProjectGridItem />
                <ProjectGridItem />
                <ProjectGridItem />
                <ProjectGridItem />
                <ProjectGridItem />
            </Grid>
        </>
    );
};

export default ProjectsPage;