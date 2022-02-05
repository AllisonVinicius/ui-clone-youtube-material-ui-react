import { Button, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import React from 'react';

function App() {
  const theme = createTheme({
    palette: {
     primary: '#f44336',
         
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">Hello word</Button>
    </ThemeProvider>
  );
}

export default App;
