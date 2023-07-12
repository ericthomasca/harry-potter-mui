import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";

import DrawerList from "./DrawerList";

export default function TopBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Harry Potter Wiki
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
        <DrawerList />
      </Drawer>
    </>
  );
}