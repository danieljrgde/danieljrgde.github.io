import { AppBar, Toolbar, Container, IconButton, Tabs, Tab, MenuItem, Menu, ListItemIcon, ListItemText, Link, Tooltip } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";
import { useState }from "react";
import TranslateIcon from '@mui/icons-material/Translate';
import Drawer from "@portfolio/components/base/Drawer";
import SVG from "@portfolio/components/base/SVG";

const styles = {
  container: {
    height: "fit-content",
  },
  tabsContainer: {
    flexGrow: 1, 
    paddingLeft: 5,
    visibility: { xs: "hidden", md: "visible" },
  },
  drawerMenuIcon: {
    display: { xs: "flex", md: "none" },
    marginRight: 2,
  },
  languageMenuIcon: {
    marginRight: 0.5,
  },
};


const Navbar = () => {

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ openDrawer, setOpenDrawer ] = useState(false);

  const handleDrawer = (ev) => {
    setOpenDrawer(prev => !prev);
  };

  const handleLanguageMenu = (ev) => {
    setAnchorEl(ev ? ev.currentTarget : null);
  };

  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    handleLanguageMenu();
  };


  return (
    <AppBar position="sticky" sx={styles.container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <>
            <IconButton onClick={handleDrawer} sx={styles.drawerMenuIcon}>
              <MenuIcon sx={{ color: '#ffffff' }} />
            </IconButton>
            <Link component={RouterLink} to="/" underline="none" variant="h6" color="white" fontFamily="cursive" fontWeight="bold" sx={{ cursor: 'pointer' }}>DJD</Link>
            <Drawer open={openDrawer} onClose={handleDrawer} />
          </>

          <Tabs value={pathname} textColor="inherit" sx={styles.tabsContainer}>
            <Tab key="about" value="/" label={t("navbar.tabs.about")} component={RouterLink} to="/" />
            <Tab key="publications" value="/publications" label={t("navbar.tabs.publications")} component={RouterLink} to="/publications" />
            <Tab key="projects" value="/projects" label={t("navbar.tabs.projects")} component={RouterLink} to="/projects" />
            <Tab key="resume" value="/resume" label={t("navbar.tabs.resume")} component={RouterLink} to="/resume" />
          </Tabs>

          <>
            <Tooltip title="Translate">
              <IconButton onClick={handleLanguageMenu}>
                <TranslateIcon sx={{ color: '#ffffff' }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => handleLanguageMenu()}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => handleSelectLanguage("en")} selected={i18n.language === "en"}>
                <ListItemIcon sx={styles.languageMenuIcon}><SVG variant="flags" name="usa" /></ListItemIcon>
                <ListItemText>English</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("fr")} selected={i18n.language === "fr"}>
                <ListItemIcon sx={styles.languageMenuIcon}><SVG variant="flags" name="france" /></ListItemIcon>
                <ListItemText>French</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("pt")} selected={i18n.language === "pt"}>
                <ListItemIcon sx={styles.languageMenuIcon}><SVG variant="flags" name="brazil" /></ListItemIcon>
                <ListItemText>Portuguese</ListItemText>
              </MenuItem>
            </Menu>
          </>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;