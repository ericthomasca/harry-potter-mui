import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "./components/TopBar";
import HomePage from "./pages/home/HomePage";
import BooksPage from "./pages/books/BooksPage";
import CharactersPage from "./pages/characters/CharactersPage";
import MoviesPage from "./pages/movies/MoviesPage";
import SpellsPage from "./pages/spells/SpellsPage";
import PotionsPage from "./pages/potions/PotionsPage";
import BookPage from "./pages/books/BookPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222f5b",
    },
    secondary: {
      main: "#CDA374",
    },
    background: {
      default: "#0e1a40",
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
    path: "/books/:id",
    element: <BookPage />,
  },
  {
    path: "/characters",
    element: <Navigate to="/characters/1" /> 
  },
  {
    path: "/characters/:page",
    element: <CharactersPage />,
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
