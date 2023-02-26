import { Box, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ChatIcon from "@mui/icons-material/Chat";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";

export default function Column1() {
  // new call button sub options
  const [AddNewAnchorEl, setOptionAnchorEl] = useState(null);

  const handleOpen = (e) => setOptionAnchorEl(e.currentTarget);
  const handleClose = () => setOptionAnchorEl(false);
  return (
    // Menu box
    <Box bgcolor={"#0A1929"} height={"100vh"}>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="#Home">
            <ListItemIcon sx={{ color: "White", mt: 1 }}>
              <ChatIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "White", mt: 1 }}>
              <AccountCircleIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "White", mt: 1 }} onClick={handleOpen}>
              <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {/* sub menu of new button */}
        <Menu
          open={Boolean(AddNewAnchorEl)}
          anchorEl={AddNewAnchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>New Call</MenuItem>
          <MenuItem onClick={handleClose}>New Chat</MenuItem>
          <MenuItem onClick={handleClose}>New Group</MenuItem>
        </Menu>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{ color: "White", position: "fixed", bottom: 70 }}
            >
              <SettingsIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{ color: "White", mt: 1, position: "fixed", bottom: 20 }}
            >
              <LogoutIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
