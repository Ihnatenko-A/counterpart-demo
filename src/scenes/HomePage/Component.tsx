import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const HomePage = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Paper className={classes.paper}>
          <Typography component="div" style={{ minHeight: '330px' }} >
            <h2>Welcome to counterpart frontend Case Study!</h2>

              <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                href='collect/1'
              >
                Take a quiz
              </Button>
              </div>
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default HomePage;
