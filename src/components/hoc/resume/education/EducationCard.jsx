import { Card, CardHeader, CardContent, Grid, Typography, Link, List } from "@mui/material"
import EducationListItem from "@portfolio/components/hoc/resume/education/EducationListItem";

const styles = {

};

const EducationCard = () => {
    return (
        <Card>
            <CardHeader title="Education" />
            <CardContent>
                <List>
                    <EducationListItem />
                    <EducationListItem />
                    <EducationListItem />
                </List>           
            </CardContent>
        </Card>
    );
};

export default EducationCard;