import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true,
    sort: "requiredFirst"
  }
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#22b7f7",
      contrastText: "white"
    },
    secondary: {
      main: "#7239e8"
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "unset"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "unset"
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: {
          ">.MuiAutocomplete-popupIndicator": {
            borderLeft: "1px solid rgb(0,0,0,0.5)",
            borderRadius: "0"
          },
          ">.MuiAutocomplete-popupIndicatorOpen": {
            borderRight: "1px solid rgb(0,0,0,0.5)",
            borderLeft: "0",
            borderRadius: "0"
          }
        }
      }
    }
  }
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];
