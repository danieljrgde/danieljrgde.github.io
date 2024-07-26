import ProjectGridItem from "@portfolio/components/hoc/project/ProjectGridItem";
import { Box, Typography, Grid, CardHeader, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingTop: 0,
        paddingBottom: 4
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
        gap: 2,
    },
};

const ProjectsPage = () => {

    const { t } = useTranslation();
    const projects = t("projects.projects", { returnObjects: true });

    return (
        <>
            <CardHeader
                sx={styles.cardHeader}
                title={t("projects.title")}
                titleTypographyProps={{ variant: "h4", fontWeight: 'bold', gutterBottom: true }}
                subheader={t("projects.subheader")}
                subheaderTypographyProps={{ variant: "body1", color: "text.secondary" }}
            />

            <Grid sx={styles.gridContainer}>
                {projects.map((project, idx) => <ProjectGridItem key={idx} project={project} />)}
            </Grid>
        </>
    );
};

export default ProjectsPage;