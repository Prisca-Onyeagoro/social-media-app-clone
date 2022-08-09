import React from 'react';
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Add/Add';
import { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './Routes/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddProduct from './components/AddProduct';

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
