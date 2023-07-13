import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // height: "75vh",
        }}
      >
        <Typography
          marginTop={3}
          variant='h3'
          justifyContent='center'
          align='center'
        >
          Home
        </Typography>
      </Box>
      <Stack marginTop={4} marginLeft={13} marginRight={13} spacing={4}>
        <Button variant='contained' href='/books'>
          Books
        </Button>
        <Button variant='contained' href='/characters'>
          Characters
        </Button>
        <Button variant='contained' href='/movies'>
          Movies
        </Button>
        <Button variant='contained' href='/spells'>
          Spells
        </Button>
        <Button variant='contained' href='/potions'>
          Potions
        </Button>
      </Stack>
    </>
  );
}
