import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const themeLight = createTheme({
  palette: {
    background: {
      default: 'rgb(217, 85, 80)',
    },
    text: {
      primary: 'white',
    },
  },
  typography: {
    fontSize: 24,
  },
});

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <div className="App">asdasdasd</div>;
    </ThemeProvider>
  );
}

export default App;
