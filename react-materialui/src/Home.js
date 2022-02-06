import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary.main,
      
      height: '100vh',
    },
  }));
  


function Home(){
    const classes = useStyles();

    
    return (
        <div className={classes.root}>Ei!</div>
    )
}


export default Home;