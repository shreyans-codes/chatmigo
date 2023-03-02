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

export default function Column2() {
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        // borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
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
            bgcolor={"#F5F7FB"}
            sx={{ pt: 3, height: "100%" }}
            //  m={0}
            //  width={250}
        >
            <Search
                sx={{
                    border: 1,
                    borderRadius: 3,
                    color: "#99999A",
                    font: "'Mochiy Pop One', sans-serif",
                }}
            >
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
                    // backgroundColor:'grey',
                    // ml:3,
                    overflow: "auto",
                    mt: 3,
                }}
            >
                <nav aria-label="main mailbox folders">
                    <List style={{ maxHeight: "88vh" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="N"
                                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    />
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
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                                <FiberManualRecordIcon
                                    sx={{ height: 13, color: "#0081B4" }}
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
                                    <Avatar
                                        alt="N"
                                        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                    />
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
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
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
                                    <Avatar
                                        alt="D"
                                        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                    />
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
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
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
                        <Divider />

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="D"
                                        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    />
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
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
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
