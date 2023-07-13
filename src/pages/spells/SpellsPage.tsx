import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SpellsPage() {
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
        Spells Page Component
      </Typography>
    </Box>
  );
}
