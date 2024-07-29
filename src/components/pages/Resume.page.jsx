import { Box, Chip, Stack } from "@mui/material";
import { useEffect, useRef, useState } from 'react';

import AchievementsCard from "@portfolio/components/hoc/achievement/AchievementsCard";
import BasicsCard from "@portfolio/components/hoc/basics/BasicsCard";
import CertificatesCard from "@portfolio/components/hoc/certificate/CertificatesCard";
import EducationsCard from "@portfolio/components/hoc/education/EducationsCard";
import ProjectsCard from "@portfolio/components/hoc/project/ProjectsCard";
import SkillsCard from '@portfolio/components/hoc/skill/SkillsCard';
import VolunteerExperiencesCard from "@portfolio/components/hoc/volunteer-experience/VolunteerExperiencesCard";
import WorkExperiencesCard from "@portfolio/components/hoc/work-experience/WorkExperiencesCard";
import { useTranslation } from "react-i18next";

const styles = {
    chipsBox: { 
        position: 'sticky', 
        top: '56px', 
        zIndex: 1, 
        backgroundColor: 'background.default',
        paddingBottom: 2,
        paddingTop: 5,
        marginTop:-5,
    },
};

const ResumePage = () => {

    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('basics');
    const sections = [
        { key: 'basics', data: t("data.basics", { returnObjects: true }), Component: BasicsCard },
        { key: 'educations', data: t("data.educations", { returnObjects: true }), Component: EducationsCard },
        { key: 'workExperiences', data: t("data.workExperiences", { returnObjects: true }), Component: WorkExperiencesCard },
        { key: 'skills', data: t("data.skills", { returnObjects: true }), Component: SkillsCard },
        { key: 'achievements', data: t("data.achievements", { returnObjects: true }), Component: AchievementsCard },
        { key: 'certificates', data: t("data.certificates", { returnObjects: true }), Component: CertificatesCard },
        { key: 'volunteerExperiences', data: t("data.volunteerExperiences", { returnObjects: true }), Component: VolunteerExperiencesCard },
        { key: 'projects', data: t("data.projects", { returnObjects: true }), Component: ProjectsCard },
    ].filter(section => section.data);
    const sectionRefs = sections.reduce((acc, section) => { acc[section.key] = useRef(null); return acc; }, {});

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 160;
        for (const section of sections) {
            const ref = sectionRefs[section.key];
            if (ref.current && ref.current.offsetTop <= scrollPosition && ref.current.offsetTop + ref.current.offsetHeight > scrollPosition) {
                setActiveSection(section.key);
                break;
            }
        }
    };

    const scrollToSection = (sectionKey) => {
        const sectionRef = sectionRefs[sectionKey];
        if (sectionRef && sectionRef.current) {
            const yOffset = -152;
            const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <>
            <Box sx={styles.chipsBox}>
                {sections.map(section => (
                    <Chip 
                        key={section.key}
                        label={t(`components.ResumePage.chips.${section.key}`)}
                        onClick={() => scrollToSection(section.key)}
                        color={activeSection === section.key ? 'primary' : 'default'}
                        variant={activeSection === section.key ? 'filled' : 'outlined'}
                    />
                ))}
            </Box>

            <Stack direction="column" gap={2} paddingX="3px" paddingTop={1}>
                {sections.map(({ key, data, Component }) => (
                    <Box key={key} ref={sectionRefs[key]}>
                        <Component {...{[key]: data}} />
                    </Box>
                ))}
            </Stack>
        </>
    );
};

export default ResumePage;