import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import React from 'react';




const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    }, 
      appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
        borderRight: 'none',
      },
      menuIcon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
      
    },
    listItemText:{
      fontSize: 14,
    },
    logo: {
      height: 25,
    },
    icons: {
      paddingRight: theme.spacing(5),
    },
    grow: {
      flexGrow: 1,
    },
  }));

function Home(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge='start'
                className={classes.menuIcon}
                color='inherit'
                aria-label='menu'
              >
              <MenuIcon />
              </IconButton>
              
              <img className={classes.logo} src="/images/preto.png" alt="logo" />
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
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                  <ListItem button key={text}>
                    <ListItemIcon>{<Icon />}</ListItemIcon>
                    <ListItemText 
                      classes={{primary: classes.listItemText}} 
                      primary={'Inicio'} 
                    />
                  </ListItem>
              </List>
              <List>
                  <ListItem button key={text}>
                    <ListItemIcon>{<Icon />}</ListItemIcon>
                    <ListItemText 
                      classes={{primary: classes.listItemText}} 
                      primary={'Em alta'} 
                    />
                  </ListItem>
              </List>
              <List>
                  <ListItem button key={text}>
                    <ListItemIcon>{<Icon />}</ListItemIcon>
                    <ListItemText 
                      classes={{primary: classes.listItemText}} 
                      primary={'inscrições'} 
                    />
                  </ListItem>
              </List>
              <Divider />
            </div>
          </Drawer>
        </div>
    )
}


export default Home;