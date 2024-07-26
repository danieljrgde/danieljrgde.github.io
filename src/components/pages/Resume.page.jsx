import { Stack } from "@mui/material";
import BasicsCard from "@portfolio/components/hoc/basics/BasicsCard";
import EducationsCard from "@portfolio/components/hoc/education/EducationsCard";
import WorkExperiencesCard from "@portfolio/components/hoc/work-experience/WorkExperiencesCard";
import CertificatesCard from "@portfolio/components/hoc/certificate/CertificatesCard";
import { useTranslation } from "react-i18next";

const ResumePage = () => {

    const { t } = useTranslation();
    const basics = t("basics", { returnObjects: true });
    const education = t("education", { returnObjects: true });
    const workExperience = t("workExperience", { returnObjects: true });
    const projects = t("projects", { returnObjects: true });
    const certificates = t("certificates", { returnObjects: true });

    return (
        <Stack direction="column" gap={2}>
            <BasicsCard />
            <EducationsCard />
            <WorkExperiencesCard />
            <CertificatesCard />
        </Stack>
    );
};

export default ResumePage;