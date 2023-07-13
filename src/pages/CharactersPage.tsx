import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CharactersPage() {
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
        Characters Page Component
      </Typography>
    </Box>
  );
}
