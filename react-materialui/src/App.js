import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import React from 'react';
import Home from './Home';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
            main: '#ff4400',
      },
      secondary: {
            main: '#3f51b5',   
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
