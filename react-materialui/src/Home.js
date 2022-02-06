import {
  AppBar,
  Button,
  IconButton, makeStyles, Toolbar
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary,
      padding: theme.spacing(2),
      height: '100vh',
      
    },
    appBar: {
      boxShadow: 'none',
    },
    icons: {
      paddingRight: theme.spacing(5)

    },

    grow: {
      flexGrow: 1,
    }
  }));

  
function Home(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge='inherit'
                className={classes.icons}
                color='inherit'
                aria-label='menu'
              >
              <MenuIcon />
              </IconButton>
              <div className={classes.grow}/>
              <IconButton              
                className={classes.icons}
                color='inherit'               
              >
              <VideoCall />
              </IconButton>
              <IconButton            
                className={classes.icons}
                color='inherit'                
              >
              <Apps />
              </IconButton>
              <IconButton              
                className={classes.icons}
                color='inherit'                
              >
              <MoreVert />
              </IconButton>
              <Button 
                variant='outlined' 
                color='secondary' 
                startIcon={<AccountCircle />}
              >
                Fazer Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}


export default Home;