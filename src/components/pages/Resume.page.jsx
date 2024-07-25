import { Stack } from "@mui/material";
import BasicsCard from "@portfolio/components/hoc/resume/basics/BasicsCard";
import EducationCard from "@portfolio/components/hoc/resume/education/EducationCard";
import WorkExperienceCard from "@portfolio/components/hoc/resume/work-experience/WorkExperienceCard";

const ResumePage = () => {
    return (
        <Stack direction="column" gap={2}>
            <BasicsCard />
            <EducationCard />
            <WorkExperienceCard />
        </Stack>
    );
};

export default ResumePage;