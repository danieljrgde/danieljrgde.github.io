import { Box, Chip, Stack } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";

import ExperiencesCard from "@portfolio/components/base/experience/ExperiencesCard";
import { useTranslation } from "react-i18next";

const styles = {
    chipsBox: { 
        position: "sticky", 
        top: "56px", 
        zIndex: 1, 
        backgroundColor: "background.default",
        paddingBottom: 2,
        paddingTop: 5,
        marginTop: -5,
    },
};

const ResumePage = () => {

    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState("basics");
    const sections = [
        { key: "basics", data: t("data.basics", { returnObjects: true }) },
        { key: "educations", data: t("data.educations", { returnObjects: true }) },
        { key: "workExperiences", data: t("data.workExperiences", { returnObjects: true }) },
        { key: "skills", data: t("data.skills", { returnObjects: true }) },
        { key: "achievements", data: t("data.achievements", { returnObjects: true }) },
        { key: "certificates", data: t("data.certificates", { returnObjects: true }) },
        { key: "volunteerExperiences", data: t("data.volunteerExperiences", { returnObjects: true }) },
        { key: "projects", data: t("data.projects", { returnObjects: true }) },
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
            window.scrollTo({top: y, behavior: "smooth"});
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <Fragment>
            <Box sx={styles.chipsBox}>
                {sections.map(section => (
                    <Chip 
                        key={section.key}
                        label={t(`components.ResumePage.chips.${section.key}`)}
                        onClick={() => scrollToSection(section.key)}
                        color={activeSection === section.key ? "primary" : "default"}
                        variant={activeSection === section.key ? "filled" : "outlined"}
                    />
                ))}
            </Box>

            <Stack direction="column" gap={2} paddingX="3px" paddingTop={1}>
                {sections.map(({ key, data }) => (
                    <Box key={key} ref={sectionRefs[key]}>
                        <ExperiencesCard variant={key} experiences={data} />
                    </Box>
                ))}
            </Stack>
        </Fragment>
    );
};

export default ResumePage;