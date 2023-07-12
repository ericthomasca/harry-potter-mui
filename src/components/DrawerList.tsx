import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LiquorIcon from "@mui/icons-material/Liquor";
import MovieIcon from "@mui/icons-material/Movie";

export default function DrawerList() {
  return (
    <List>
      <ListItemButton href='/books'>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary='Books' />
      </ListItemButton>
      <ListItemButton href='/characters'>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Characters' />
      </ListItemButton>
      <ListItemButton href='/movies'>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary='Movies' />
      </ListItemButton>
      <ListItemButton href='/spells'>
        <ListItemIcon>
          <LiquorIcon />
        </ListItemIcon>
        <ListItemText primary='Spells' />
      </ListItemButton>
      <ListItemButton href='/potions'>
        <ListItemIcon>
          <AutoFixHighIcon />
        </ListItemIcon>
        <ListItemText primary='Potions' />
      </ListItemButton>
    </List>
  );
}
