import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBarComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'transparent'}>
        <Typography variant="h6" className={classes.title}>
          Dogs are the best people
        </Typography>
      </AppBar>
    </div>
  );
}

export default AppBarComponent;
