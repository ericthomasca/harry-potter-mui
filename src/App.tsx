import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from "./components/TopBar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E6680', // Ravenclaw Blue
    },
    secondary: {
      main: '#CDA374', // Ravenclaw Bronze
    },
    background: {
      default: '#202020', // Dark background color
      paper: '#3E6680', 
    },
  },
  typography: {
    fontFamily: 'Cinzel Decorative, sans-serif',
  },
});

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <TopBar />
    </ThemeProvider>
    </>
  );
}
