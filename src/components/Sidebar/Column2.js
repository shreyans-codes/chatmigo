import React from "react";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { Divider, Stack } from "@mui/material";
// import TimelineDot from "@mui/lab/TimelineDot";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// import ListItemIcon from "@mui/material/ListItemIcon";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import MuiListItem from "@material-ui/core/ListItem";

export default function Column2() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#E4E5E7",
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Box
      bgcolor={"white"}
      sx={{ mt: 2 }}
      //  m={0}
      //  width={250}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Box
        sx={{
          // width: "80vh",
          // maxWidth: 300,
          bgcolor: "background.paper",
          // ml:3,
          overflow: "hidden",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List style={{ maxHeight: "88vh" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="N" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
                <FiberManualRecordIcon
                  sx={{ height: 13 }}
                ></FiberManualRecordIcon>

                <Typography
                  align={"right"}
                  fontSize={12}
                  display={"flex"}
                  color={"grey"}
                  flexDirection={"row-reverse"}
                >
                  9:36
                </Typography>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="N" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
                <Typography
                  align={"right"}
                  fontSize={12}
                  display={"flex"}
                  m={1}
                  color={"grey"}
                  flexDirection={"row-reverse"}
                >
                  9:36
                </Typography>
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="N" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
                <Typography
                  align={"right"}
                  fontSize={12}
                  display={"flex"}
                  m={1}
                  color={"grey"}
                  flexDirection={"row-reverse"}
                >
                  9:36
                </Typography>
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="D" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                      {/* <TimelineDot
                                                sx={{
                                                    backgroundColor: "blue",
                                                    height:2,
                                                    width:2,

                                                }}
                                            /> */}
                    </React.Fragment>
                  }
                />
                <Typography
                  align={"right"}
                  fontSize={12}
                  display={"flex"}
                  m={2}
                  color={"grey"}
                  flexDirection={"row-reverse"}
                >
                  9:36
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
}
