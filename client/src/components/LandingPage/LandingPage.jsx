import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Add from "./Add";

const LandingPage = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
