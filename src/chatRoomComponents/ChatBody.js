import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Avatar,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
// import { Send, Mic, MoreVert } from '@mui/icons-material';
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import SendIcon from "@mui/icons-material/Send";

const ChatBody = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey, how are you?",
      from: "other",
    },
    {
      id: 2,
      text: "I'm good, thanks. How about you?",
      from: "self",
    },
    {
      id: 3,
      text: "I'm doing great!",
      from: "other",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in volutpat leo. Nulla ornare aliquam viverra. Suspendisse viverra purus elementum, varius lacus non, porta ex. Praesent at venenatis sapien. Ut ultrices tellus non lobortis lacinia. Praesent id arcu eu ex bibendum ornare a ut nunc. Nulla facilisi. Nulla sed elementum orci. Curabitur hendrerit elit tortor, placerat luctus elit malesuada pretium. Nam est lectus, auctor nec nunc at, porta facilisis purus. Nunc nisi ipsum, tempus quis molestie vitae, pulvinar porta dui.",
      from: "self",
    },
    {
      id: 5,
      text: "Vestibulum commodo tincidunt ligula, sed dignissim ipsum viverra sit amet. Curabitur nec ultricies nisl, non placerat turpis. Proin id semper erat. Donec elementum ultrices orci, eget facilisis orci vulputate sit amet. Phasellus sed quam quis mauris scelerisque mollis id sodales nisi. Ut tempus tempor mi quis finibus. Nulla facilisi. Vestibulum imperdiet neque fringilla vulputate sagittis. Aliquam porttitor vulputate porta. Pellentesque ultrices gravida nisl, sed lacinia massa accumsan nec. Fusce ac turpis sit amet enim bibendum tempor. Sed dolor nisl, facilisis eget consectetur nec, feugiat eu erat. Quisque rhoncus nibh ante, fermentum fermentum est rutrum eu. Fusce fermentum vel dolor ac convallis. Fusce quis augue luctus, iaculis nulla sit amet, pharetra ipsum. Aliquam egestas volutpat efficitur.",
      from: "other",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in volutpat leo. Nulla ornare aliquam viverra. Suspendisse viverra purus elementum, varius lacus non, porta ex. Praesent at venenatis sapien. Ut ultrices tellus non lobortis lacinia. Praesent id arcu eu ex bibendum ornare a ut nunc. Nulla facilisi. Nulla sed elementum orci. Curabitur hendrerit elit tortor, placerat luctus elit malesuada pretium. Nam est lectus, auctor nec nunc at, porta facilisis purus. Nunc nisi ipsum, tempus quis molestie vitae, pulvinar porta dui.",
      from: "self",
    },
  ]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: inputText,
          from: "self",
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#F5EDED",
            height: "76.8vh",
            overflowY: "scroll",
          }}
        >
          <Box sx={{ p: 2, m: 1 }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{ display: "flex", marginBottom: "16px" }}
              >
                {message.from === "self" ? (
                  <div style={{ flexGrow: 1 }}></div>
                ) : (
                  <Avatar sx={{ marginRight: "8px" }}>U</Avatar>
                )}
                <Paper
                  variant="outlined"
                  sx={{
                    // flexGrow: 1,
                    maxWidth: "60%",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    backgroundColor:
                      message.from === "self" ? "secondary" : "#ecf9ff",
                  }}
                >
                  <Typography>{message.text}</Typography>
                </Paper>
              </div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "white", color: "black" }}>
          <Box sx={{ p: 1, m: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <IconButton sx={{ height: "100%", marginTop: "-4px" }}>
                  <SentimentSatisfiedRoundedIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton sx={{ height: "100%", marginTop: "-4px" }}>
                  <AttachFileRoundedIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  label="Type a message"
                  variant="outlined"
                  value={inputText}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* <Grid item xs={1}>
                <IconButton sx={{ height: '100%', marginTop: '-4px' }}>
                  {inputText === '' ? <Mic /> : <Send onClick={handleSendMessage} />}
                </IconButton>
              </Grid> */}
              <Grid item xs={1}>
                <IconButton sx={{ height: "100%" }}>
                  <SendIcon
                    onClick={handleSendMessage}
                    sx={{ fontSize: "35px" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatBody;
