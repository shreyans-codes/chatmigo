import { Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import ChatRoom from "./components/ChatRoom";
import Rightbar from "./components/Rightbar";
import "./theme.js";
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
