import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';

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
                href='collect'
              >
                Take a quiz
              </Button>
              </div>
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
