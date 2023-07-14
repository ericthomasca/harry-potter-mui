import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

interface BookData {
  title: string;
  summary: string;
  author: string;
  release_date: string;
  dedication: string;
  pages: number;
  cover: string;
  wiki?: string;
}

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<BookData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        if (id) {
          const response = await axios.get<BookData>(
            `https://api.potterdb.com/v1/books/${id}`
          );
          setBookData(response.data);
          setLoading(false);
          console.log("Book Data:", response.data);
          console.log("Title:", response.data.title);
          console.log("Summary:", response.data.summary);
          console.log("Author:", response.data.author);
          console.log("Release Date:", response.data.release_date);
          console.log("Dedication:", response.data.dedication);
          console.log("Pages:", response.data.pages);
          console.log("Cover:", response.data.cover);
          console.log("Wiki:", response.data.wiki);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookData) {
    return <div>Error: Failed to fetch book data.</div>;
  }

  const {
    title,
    summary,
    author,
    release_date,
    dedication,
    pages,
    cover,
    wiki,
  } = bookData;

  return (
    <Paper
      sx={{
        margin: "20px",
        padding: "20px",
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={cover}
          alt={title}
          style={{
            width: "200px",
            marginRight: "20px",
          }}
        />
        <Box>
          <Typography>
            <strong>Author:</strong> {author}
          </Typography>
          <Typography>
            <strong>Release Date:</strong> {release_date}
          </Typography>
          <Typography>
            <strong>Pages:</strong> {pages}
          </Typography>
          {wiki && (
            <Typography>
              <strong>Wiki:</strong>{" "}
              <a href={wiki} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Typography>
          )}
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
        }}
      >
        <strong>Summary:</strong> {summary}
      </Typography>
      <Typography variant="body1">
        <strong>Dedication:</strong> {dedication}
      </Typography>
    </Paper>
  );
};

export default BookPage;
