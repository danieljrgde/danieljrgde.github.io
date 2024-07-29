import AppRoutes from "@portfolio/app/AppRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@portfolio/app/Theme";
import { IsTechJargonProvider } from '@portfolio/contexts/IsTechJargonContext';

const App = () => {
  return (
    <IsTechJargonProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </IsTechJargonProvider>
  );
};

export default App;