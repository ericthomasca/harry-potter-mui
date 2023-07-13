import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LiquorIcon from "@mui/icons-material/Liquor";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";

export default function DrawerList() {
  return (
    <List>
      <ListItemButton href='/' divider>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText
          primary='Home'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
      <ListItemButton href='/books'>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <BookIcon />
        </ListItemIcon>
        <ListItemText
          primary='Books'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
      <ListItemButton href='/characters'>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText
          primary='Characters'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
      <ListItemButton href='/movies'>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText
          primary='Movies'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
      <ListItemButton href='/spells'>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <LiquorIcon />
        </ListItemIcon>
        <ListItemText
          primary='Spells'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
      <ListItemButton href='/potions'>
        <ListItemIcon sx={{ color: "#FFF" }}>
          <AutoFixHighIcon />
        </ListItemIcon>
        <ListItemText
          primary='Potions'
          primaryTypographyProps={{ color: "#FFF" }}
        />
      </ListItemButton>
    </List>
  );
}
