import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BooksPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <Typography marginTop={3} variant='h3' align='center'>
        Books
      </Typography>
    </Box>
  );
}
