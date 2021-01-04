import React from 'react';
import { useHistory } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'

import { useStyles } from './styles';
import { clearState } from 'store/actionCreators';

const HomePage = ({ dispatch } : { dispatch: any }) => {

  const classes = useStyles();

  const history = useHistory();

  const onClick = () => {
    dispatch(clearState());
    history.push('/collect');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Paper className={classes.paper}>
          <Typography component="div" style={{ minHeight: '330px' }} >
            <h2 style={{textAlign: 'center'}}>Welcome to frontend Case Study!</h2>

              <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={onClick}
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

export default connect()(HomePage);
