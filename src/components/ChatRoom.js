import { Box } from "@mui/material";
import React from "react";
import ChatBody from "../chatRoomComponents/ChatBody";
// import ChatFooter from "../chatRoomComponents/ChatFooter";
import ChatHeader from "../chatRoomComponents/ChatHeader";

const ChatRoom = () => {
  return (
    <Box flex={6}>
      <ChatHeader />
      <ChatBody />
      {/* <ChatFooter /> */}
    </Box>
  );
};

export default ChatRoom;
