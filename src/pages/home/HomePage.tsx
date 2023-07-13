import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <>
      <Typography
        display='flex'
        marginTop={3}
        variant='h3'
        justifyContent='center'
        align='center'
      >
        Home
      </Typography>
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
