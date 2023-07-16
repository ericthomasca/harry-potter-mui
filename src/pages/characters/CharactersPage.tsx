import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [cardWidth, setCardWidth] = useState(0);
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();

  let pageSize = 10;
  let cardWidthRatio = 0.7;

  useEffect(() => {
    window.scrollTo(0, 0); // jump to top of screen on load

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.potterdb.com/v1/characters?page[number=${page}]&page[size=${pageSize}]`
        );
        setCharacters(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (page) {
      fetchData();
    }

    const handleResize = () => {
      setCardWidth(window.innerWidth * cardWidthRatio);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [page]);

  const handlePreviousPage = () => {
    const currentPage = parseInt(page ?? "1");
    navigate(`/characters/${currentPage - 1}`);
  };

  const handleNextPage = () => {
    const currentPage = parseInt(page ?? "1");
    navigate(`/characters/${currentPage + 1}`);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' padding={2}>
      <Typography variant='h3' align='center' color='#FFFFFF' marginBottom={2}>
        Characters
      </Typography>
      <Box display='flex' justifyContent='center'>
        <Box margin={2}>
          <Button
            startIcon={<ArrowLeftIcon />}
            variant='contained'
            onClick={handlePreviousPage}
            disabled={!page || page === "1"}
          >
            Prev
          </Button>
        </Box>
        <Box margin={2}>
          <Button
            endIcon={<ArrowRightIcon />}
            variant='contained'
            onClick={handleNextPage}
            disabled={!page || characters.length < pageSize}
          >
            Next
          </Button>
        </Box>
      </Box>
      <List sx={{ width: "65%" }}>
        {characters.map((character) => (
          <ListItem key={character.id} sx={{ marginBottom: 2 }}>
            <Link
              href={`/characters/${character.id}`}
              underline='none'
              color='inherit'
            >
              <Card sx={{ display: "flex", width: cardWidth }}>
                <CardMedia
                  component='img'
                  src={character.attributes.image}
                  alt={character.attributes.name}
                  sx={{ width: 200, height: "100%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant='h6' component='div'>
                    {character.attributes.name}
                  </Typography>
                  {character.attributes.gender && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Gender: {character.attributes.gender}
                    </Typography>
                  )}
                  {character.attributes.born && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Born: {character.attributes.born}
                    </Typography>
                  )}
                  {character.attributes.died !== null && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Died: {character.attributes.died}
                    </Typography>
                  )}
                  {character.attributes.species && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Species: {character.attributes.species}
                    </Typography>
                  )}
                  {character.attributes.height !== null && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Height: {character.attributes.height}
                    </Typography>
                  )}
                  {character.attributes.weight !== null && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Weight: {character.attributes.weight}
                    </Typography>
                  )}
                  {character.attributes.hair_color && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Hair Color: {character.attributes.hair_color}
                    </Typography>
                  )}
                  {character.attributes.eye_color && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Eye Color: {character.attributes.eye_color}
                    </Typography>
                  )}
                  {character.attributes.skin_color && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Skin Color: {character.attributes.skin_color}
                    </Typography>
                  )}
                  {character.attributes.blood_status && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Blood Status: {character.attributes.blood_status}
                    </Typography>
                  )}
                  {character.attributes.marital_status && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Marital Status: {character.attributes.marital_status}
                    </Typography>
                  )}
                  {character.attributes.nationality && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Nationality: {character.attributes.nationality}
                    </Typography>
                  )}
                  {character.attributes.animagus && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Animagus: {character.attributes.animagus}
                    </Typography>
                  )}
                  {character.attributes.boggart && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Boggart: {character.attributes.boggart}
                    </Typography>
                  )}
                  {character.attributes.house && (
                    <Typography marginTop={1} variant='subtitle1'>
                      House: {character.attributes.house}
                    </Typography>
                  )}
                  {character.attributes.patronus && (
                    <Typography marginTop={1} variant='subtitle1'>
                      Patronus: {character.attributes.patronus}
                    </Typography>
                  )}
                  {character.attributes.alias_names &&
                    character.attributes.alias_names.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Alias Names:{" "}
                        {character.attributes.alias_names.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.family_members &&
                    character.attributes.family_members.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Family Members:{" "}
                        {character.attributes.family_members.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.jobs &&
                    character.attributes.jobs.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Jobs: {character.attributes.jobs.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.romances &&
                    character.attributes.romances.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Romances: {character.attributes.romances.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.titles &&
                    character.attributes.titles.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Titles: {character.attributes.titles.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.wands &&
                    character.attributes.wands.length > 0 && (
                      <Typography marginTop={2} variant='body1'>
                        Wands: {character.attributes.wands.join(", ")}
                      </Typography>
                    )}
                  {character.attributes.wiki && (
                    <Typography marginTop={2} variant='body1'>
                      Wiki:{" "}
                      <Link
                        href={character.attributes.wiki}
                        target='_blank'
                        rel='noopener'
                        color='inherit'
                      >
                        {character.attributes.wiki}
                      </Link>
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box display='flex' justifyContent='center' mt={3}>
        <Box margin={2}>
          <Button
            startIcon={<ArrowLeftIcon />}
            variant='contained'
            onClick={handlePreviousPage}
            disabled={!page || page === "1"}
          >
            Prev
          </Button>
        </Box>
        <Box margin={2}>
          <Button
            endIcon={<ArrowRightIcon />}
            variant='contained'
            onClick={handleNextPage}
            disabled={!page || characters.length < pageSize}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
