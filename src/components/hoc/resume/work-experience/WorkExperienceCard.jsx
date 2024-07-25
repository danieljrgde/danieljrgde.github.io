import { Card, CardHeader, CardContent, Grid, Typography, Link, List } from "@mui/material"
import WorkExperienceListItem from "@portfolio/components/hoc/resume/work-experience/WorkExperienceListItem";

const styles = {

};

const WorkExperienceCard = () => {
    return (
        <Card>
            <CardHeader title="Work Experience" />
            <CardContent>
                <List>
                    <WorkExperienceListItem />
                    <WorkExperienceListItem />
                    <WorkExperienceListItem />
                </List>           
            </CardContent>
        </Card>
    );
};

export default WorkExperienceCard;