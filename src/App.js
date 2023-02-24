import { Box, Stack } from "@mui/material";
import ChatRoom from "./components/ChatRoom";
import MessageWindow from "./components/MessageWindow";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import NewColumn from "./components/Sidebar/Newcolumn";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ overflow: "hidden" }}
        >
          <NewColumn />
          <ChatRoom />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
