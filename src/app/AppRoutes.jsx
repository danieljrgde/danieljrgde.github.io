import { Navigate, Route, Routes } from "react-router-dom";

import AboutPage from "@portfolio/components/pages/About.page";
import { BrowserRouter } from "react-router-dom";
import Layout from "@portfolio/components/base/layout/Layout";
import ProjectsPage from "@portfolio/components/pages/Projects.page";
import PublicationsPage from "@portfolio/components/pages/Publications.page";
import ResumePage from "@portfolio/components/pages/Resume.page";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AboutPage />} />   
                    <Route path="projects" element={<ProjectsPage />} />
                    {/* <Route path="publications" element={<PublicationsPage />} /> */}
                    <Route path="resume" element={<ResumePage />} />
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;