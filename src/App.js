import { ThemeProvider } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import ChatRoom from "./components/ChatRoom";
import MessageWindow from "./components/MessageWindow";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import NewColumn from "./components/Sidebar/Newcolumn";
import { myTheme } from "./theme.js";


function App() {
  return (
    <ThemeProvider theme={myTheme}>
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
    </ThemeProvider>
  );
}

export default App;
