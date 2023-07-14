import { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [cardWidth, setCardWidth] = useState(0);

  let cardWidthRatio = 0.7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.potterdb.com/v1/books");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setCardWidth(window.innerWidth * cardWidthRatio);
    };

    handleResize(); // Set initial card width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={3}
    >
      <Typography variant="h3" align="center" color="#FFFFFF">
        Books
      </Typography>
      <List sx={{ marginTop: 2 }}>
        {books.map((book) => (
          <ListItem key={book.id} sx={{ marginBottom: 2 }}>
          <Link
            href={`/books/${book.id}`}
            underline="none"
            color="inherit"
          >
            <Card sx={{ display: "flex", width: cardWidth }}>
              <CardMedia
                component="img"
                src={book.attributes.cover}
                alt={book.attributes.title}
                sx={{ width: 200 }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.attributes.title}
                </Typography>
                <Typography marginTop={1} variant="subtitle1">
                  Release Year: {book.attributes.release_date.slice(0, 4)}
                </Typography>
                <Typography marginTop={2} variant="body1">
                  {book.attributes.summary}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </ListItem>
        ))}
      </List>
    </Box>
  );
}
