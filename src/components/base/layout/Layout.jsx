import { Outlet } from "react-router-dom";
import Navbar from "@portfolio/components/base/layout/Navbar";
import { Box, Container } from "@mui/material";
import SideMenu from "@portfolio/components/base/layout/SideMenu";
import Footer from "@portfolio/components/base/layout/Footer";

const styles = {
  container: {
    paddingTop: 4,
    paddingBottom: 4,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100dvh - 104px)"
  },
  boxContainer: {
    display: "flex",
    gap: 2,
  },
  contentContainer: {
    flexGrow: 1,
  },
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.boxContainer}>
          <SideMenu />
          <Box sx={styles.contentContainer}>
            <Outlet />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;