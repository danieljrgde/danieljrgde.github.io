import { Card, CardContent, CardHeader, Grid, Link, List, Typography } from "@mui/material"

import ProjectListItem from "@portfolio/components/hoc/project/ProjectListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const ProjectsCard = ({ projects }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.ProjectsCard.title")}
            />
            <CardContent>
                <List>
                    {projects.map((project, idx) => <ProjectListItem key={idx} project={project} />)}
                </List>           
            </CardContent>
        </Card>
    );
};

export default ProjectsCard;