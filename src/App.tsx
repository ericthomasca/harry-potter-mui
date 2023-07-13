import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import CharactersPage from "./pages/CharactersPage";
import MoviesPage from "./pages/MoviesPage";
import SpellsPage from "./pages/SpellsPage";
import PotionsPage from "./pages/PotionsPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222f5b", // Ravenclaw Blue
    },
    secondary: {
      main: "#CDA374", // Ravenclaw Bronze
    },
    background: {
      // default: "#5d5d5d", // TODO enable later
      paper: "#946b2d",
    },
  },
  typography: {
    fontFamily: "Cinzel Decorative, sans-serif",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/spells",
    element: <SpellsPage />,
  },
  {
    path: "/potions",
    element: <PotionsPage />,
  },
]);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
