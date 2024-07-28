import { CardHeader, Chip, IconButton, Stack } from "@mui/material";

import AchievementsCard from "@portfolio/components/hoc/achievement/AchievementsCard";
import BasicsCard from "@portfolio/components/hoc/basics/BasicsCard";
import CertificatesCard from "@portfolio/components/hoc/certificate/CertificatesCard";
import EducationsCard from "@portfolio/components/hoc/education/EducationsCard";
import Vector from "@portfolio/components/base/Vector";
import VolunteerExperiencesCard from "@portfolio/components/hoc/volunteer-experience/VolunteerExperiencesCard";
import WorkExperiencesCard from "@portfolio/components/hoc/work-experience/WorkExperiencesCard";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingTop: 0,
    },
};

const ResumePage = () => {

    const { t } = useTranslation();
    const basics = t("basics", { returnObjects: true });
    const education = t("education", { returnObjects: true });
    const workExperience = t("workExperience", { returnObjects: true });
    const projects = t("projects", { returnObjects: true });
    const certificates = t("certificates", { returnObjects: true });

    return (
        <>
            <CardHeader
                sx={styles.cardHeader}
                title="Resume"
                titleTypographyProps={{ variant: "h4", fontWeight: 'bold', gutterBottom: true }}
                subheader="A brief description of publications overall"
                subheaderTypographyProps={{ variant: "body1", color: "text.secondary" }}
            />

            <Stack direction="row" alignItems="center" paddingBottom={2}>
                <Chip label="Basics"clickable />
                <Chip label="Education"clickable />
                <Chip label="Work Experience"clickable />
                <Chip label="Achievements"clickable />
                <Chip label="Certificates"clickable />
                <Chip label="Volunteer Experience"clickable />
            </Stack>

            <Stack direction="column" gap={2}>
                <BasicsCard />
                <EducationsCard />
                <WorkExperiencesCard />
                <AchievementsCard />
                <CertificatesCard />
                <VolunteerExperiencesCard />
            </Stack>
        </>
    );
};

export default ResumePage;