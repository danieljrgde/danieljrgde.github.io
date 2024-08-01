import { Card, CardContent, CardHeader, List } from "@mui/material"

import ProjectListItem from "@portfolio/components/hoc/project/ProjectListItem";
import PropTypes from 'prop-types';
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

ProjectsCard.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            report: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired,
            github: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string
            }).isRequired,
            intro: PropTypes.string.isRequired,
            bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            techStack: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired
    ).isRequired
};

export default ProjectsCard;