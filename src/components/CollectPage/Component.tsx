import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import PersonalInfoForm from './components/PersonalInfoForm';
import MusicalPreferencesForm from './components/MusicalPreferencesForm';
import ReviewStep from './components/ReviewStep';

import { useStyles } from './styles';

function getForm(step: number) {
  switch (step) {
    case 1:
      return <PersonalInfoForm />;
    case 2:
      return <MusicalPreferencesForm />;
    case 3:
      return <ReviewStep />;
    default:
      throw new Error('Unknown step');
  };
};

const Checkout = ({ step } : {step: number}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <React.Fragment>
            {getForm(step)}
            </React.Fragment>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
};

const mapState = (state: PersonalInfoState) => ({
  step: state.step,
});

const connector = connect(mapState);

export default connector(Checkout);
