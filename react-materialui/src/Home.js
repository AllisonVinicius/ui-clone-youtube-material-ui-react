import {
  AppBar,
  Button,
  IconButton, makeStyles, Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary,
      padding: theme.spacing(2),
      height: '100vh',
    },
  }));

  
function Home(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar>
            <Toolbar>
              <IconButton
                edge='inherit'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
              >
              <MenuIcon />
              </IconButton>
              <Typography variant='h6' className={classes.title}> 
                New
              </Typography>
              <Button color='inherit'>Login</Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}


export default Home;