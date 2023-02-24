import styled from "@emotion/styled";
import { Close, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "../css/rightbar.css";

const imgSrc =
  "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";

const memberProfileData = [
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Rudransh Rajpurohit",
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Riya Vij",
  },
  {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Dhritideepa Gorai",
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "Narendra Singh Rathore",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Shreyans Sethia Jain",
  },
  {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Ian Dooley",
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "Ivana Cajina",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Matheus Ferrero",
  },
  {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Ian Dooley",
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "Ivana Cajina",
  },
  {
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Matheus Ferrero",
  },
];

const mediaImages = [
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Rudransh Rajpurohit",
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Riya Vij",
  },
  {
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Dhritideepa Gorai",
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "Narendra Singh Rathore",
  },
];

const SectionHead = styled(Typography)(() => ({
  textAlign: "left",
  fontWeight: "bold",
  padding: "8px 0px",
}));

const MemberProfileRightBar = (props) => {
  return (
    <Box>
      <Stack direction={"row"} spacing={2} p="2px">
        <Avatar src={memberProfileData[props.id].img} />
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {memberProfileData[props.id].name}
          </Typography>
          <IconButton aria-label="more-options">
            <MoreVert color="black" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

const Rightbar = (props) => {
  return (
    <Box flex={3} sx={{ height: "100vh", overflowY: "scroll" }}>
      <IconButton aria-label="close-btn">
        <Close />
      </IconButton>
      <Stack justifyContent={"space-evenly"} p={2} textAlign={"center"}>
        <Typography sx={{ padding: "8px 0px", fontSize: "30px" }}>
          NOVOCHAT 🔥
        </Typography>
        <Avatar
          src={imgSrc}
          sx={{
            width: "250px",
            height: "250px",
            display: "block",
            marginTop: "6px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <SectionHead
          sx={{
            marginTop: "4px",
          }}
        >
          {/* Group Description */}
          GROUP DESCRIPTION
          <Typography>
            <em>Seafarers among seafarers</em>
            <br />
            Rajkumar ke bhakts 📚
            <br />
            Vitian 🏆
            <br />
            La ilah il Allah ☪
            <br />
            <br />
            <em>Cinco amigos tratando de entender la vida</em>
          </Typography>
        </SectionHead>
        <SectionHead>
          GROUP MEMBERS
          <MemberProfileRightBar id="0" />
          <MemberProfileRightBar id="1" />
          <MemberProfileRightBar id="2" />
          <MemberProfileRightBar id="3" />
          <MemberProfileRightBar id="4" />
        </SectionHead>
        <SectionHead>
          MEDIA
          <ImageList
            sx={{
              width: "100%",
              height: "100%",
            }}
            className="image-list-blur"
            cols={4}
          >
            {mediaImages.map((item) => (
              <ImageListItem key={item.img} sx={{ overflow: "hidden" }}>
                <img
                  src={`${item.img}?w=100%&h=100%&fit=contain&auto=format`}
                  srcSet={`${item.img}?w=100%&h=100%&fit=contain&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </SectionHead>
      </Stack>
    </Box>
  );
};

export default Rightbar;
