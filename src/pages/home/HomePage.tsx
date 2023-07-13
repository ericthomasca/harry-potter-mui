import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Typography variant='h1' justifyContent='center' align='center'>
        Home Page Component
      </Typography>
    </Box>
  );
}
