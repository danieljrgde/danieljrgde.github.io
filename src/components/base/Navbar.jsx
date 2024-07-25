import { AppBar, Toolbar, Container, Avatar, Typography, IconButton, Tabs, Tab, SvgIcon, MenuItem, Menu, ListItemIcon, ListItemText } from "@mui/material";
import { US as FlagUS, FR as FlagFR, BR as FlagBR } from 'country-flag-icons/react/3x2';
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";
import { useState }from "react";

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
    marginRight: 1.5,
  },
};

const languageFlagMap = {
  en: <FlagUS />,
  fr: <FlagFR />,
  pt: <FlagBR />,
};



const Navbar = () => {

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [ anchorEl, setAnchorEl ] = useState(null);

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
            <IconButton sx={styles.drawerMenuIcon}>
              <MenuIcon sx={{ color: '#ffffff' }} />
            </IconButton>
            <Typography variant="h6" color="white">Daniel</Typography>
          </>

          <Tabs value={pathname} textColor="inherit" sx={styles.tabsContainer}>
            <Tab key="about" value="/" label={t("navbar.tabs.about")} component={RouterLink} to="/" />
            <Tab key="publications" value="/publications" label={t("navbar.tabs.publications")} component={RouterLink} to="/publications" />
            <Tab key="projects" value="/projects" label={t("navbar.tabs.projects")} component={RouterLink} to="/projects" />
            <Tab key="resume" value="/resume" label={t("navbar.tabs.resume")} component={RouterLink} to="/resume" />
          </Tabs>

          <>
            <IconButton onClick={handleLanguageMenu}>
              <SvgIcon>{languageFlagMap[i18n.language] ?? null}</SvgIcon>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => handleLanguageMenu()}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => handleSelectLanguage("en")} selected={i18n.language === "en"}>
                <ListItemIcon sx={styles.languageMenuIcon}><FlagUS /></ListItemIcon>
                <ListItemText>English</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("fr")} selected={i18n.language === "fr"}>
                <ListItemIcon sx={styles.languageMenuIcon}><FlagFR /></ListItemIcon>
                <ListItemText>French</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("pt")} selected={i18n.language === "pt"}>
                <ListItemIcon sx={styles.languageMenuIcon}><FlagBR /></ListItemIcon>
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