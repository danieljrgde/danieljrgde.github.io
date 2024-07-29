import { AppBar, Container, IconButton, Link, ListItemIcon, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

import Drawer from "@portfolio/components/base/layout/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import Vector from "@portfolio/components/base/Vector";
import dayjs from "dayjs";
import { useState }from "react";
import { useTranslation } from "react-i18next";

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
  const tabs = t("components.Navbar.tabs", { returnObjects: true });

  const handleDrawer = (ev) => {
    setOpenDrawer(prev => !prev);
  };

  const handleLanguageMenu = (ev) => {
    setAnchorEl(ev ? ev.currentTarget : null);
  };

  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    dayjs.locale(lang)
    handleLanguageMenu();
  };


  return (
    <AppBar position="sticky" sx={styles.container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <>
            <IconButton onClick={handleDrawer} sx={styles.drawerMenuIcon}>
              <MenuIcon htmlColor="white" />
            </IconButton>
            <Link component={RouterLink} to="/" underline="none" variant="h6" color="white" fontFamily="cursive" fontWeight="bold" sx={{ cursor: 'pointer' }}>{t("components.Navbar.initials")}</Link>
            <Drawer open={openDrawer} onClose={handleDrawer} />
          </>

          <Tabs value={pathname} textColor="inherit" sx={styles.tabsContainer}>
            {tabs.map((tab, idx) => <Tab key={idx} value={tab.to} label={tab.label} to={tab.to} component={RouterLink} />)}
          </Tabs>

          <>
            <Tooltip title="Translate">
              <IconButton onClick={handleLanguageMenu}>
                <TranslateIcon htmlColor="white" />
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
                <ListItemIcon sx={styles.languageMenuIcon}><Vector variant="flags" name="usa" /></ListItemIcon>
                <ListItemText>English</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("fr")} selected={i18n.language === "fr"}>
                <ListItemIcon sx={styles.languageMenuIcon}><Vector variant="flags" name="france" /></ListItemIcon>
                <ListItemText>French</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => handleSelectLanguage("pt-br")} selected={i18n.language === "pt-br"}>
                <ListItemIcon sx={styles.languageMenuIcon}><Vector variant="flags" name="brazil" /></ListItemIcon>
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