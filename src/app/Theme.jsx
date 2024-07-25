import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const { palette } = createTheme();

const theme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#00008B",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            height: "16px",
            visibility: "hidden",
            width: "16px",
          },
          "*::-webkit-scrollbar-department": {
            background: "transparent",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-department:hover": {
            background: "#eeeeee",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#e0e0e0",
            backgroundClip: "content-box",
            border: "4px solid transparent",
            borderRadius: "15px",
          },
          "*::-webkit-scrollbar-thumb:active": {
            background: "#9e9e9e",
            backgroundClip: "content-box",
            border: "4px solid transparent",
            borderRadius: "15px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "#bdbdbd",
            backgroundClip: "content-box",
            border: "4px solid transparent",
            borderRadius: "15px",
          },
          "*:hover::-webkit-scrollbar": {
            height: "16px",
            visibility: "visible",
            width: "16px",
          }
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          borderRadius: 5,
        },
        root: {
          borderRadius: 15,
          height: 12,
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            fontWeight: "bold",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            borderRadius: 10,
          },
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: palette.augmentColor({ color: { main: "#02295A" } }),
    secondary: palette.augmentColor({ color: { main: "#FF8F47" } }),
    neutral: palette.augmentColor({ color: { main: grey[300] } }),
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    allVariants: {

    },
  },
});

export default theme;