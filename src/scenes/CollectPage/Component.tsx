import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import PersonalInfoForm from './components/PersonalInfoForm';
import MusicalPreferencesForm from './components/MusicalPreferencesForm';
import ReviewStep from './components/ReviewStep';

import { setError } from '../../store/actionCreators'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
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
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

function getForm(step: string) {
  switch (step) {
    case '1':
      return <PersonalInfoForm />;
    case '2':
      return <MusicalPreferencesForm />;
    case '3':
      return <ReviewStep />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = ({
    dispatch,
    match,
    firstName,
    email,
    lastName,
    preference
  }:{
    dispatch: any,
    match: any,
    firstName: string,
    email: string,
    lastName: string,
    preference: Array<string>
  }) => {
  const classes = useStyles();
 
  const validateStepOne = () => {

    let isValid: boolean = true;
    const emailRegex = RegExp(/\S+@\S+\.\S+/);

    if (!firstName) {
      dispatch(setError('firstName'))
      isValid = false;
    }
    
    if (!lastName) {
      dispatch(setError('lastName'))
      isValid = false;
    }

    if (!email || !emailRegex.test(email)) {
      dispatch(setError('email'))
      isValid = false;
    }

    return isValid;
  }

  const validateStepTwo = () => {

    let isValid: boolean = true;

    if (!preference.length) {
      dispatch(setError('musicalPreferences'))
      isValid = false;
    }

    return isValid;
  }

  const history = useHistory();

  const handleClick = () => {
    if (match.params.id === '1') {
      if (validateStepOne()) {
        history.push(`/collect/${+match.params.id + 1}`)
      }
    } 
    
    if (match.params.id === '2') {
      if (validateStepTwo()) {
        history.push(`/collect/${+match.params.id + 1}`)
      }
    }
  }

  const handleBack = () => {
    history.push(`/collect/${+match.params.id - 1 || 1}`)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <React.Fragment>
            <Grid item xs={12}>
              {getForm(match.params.id)}
            </Grid>
            <Grid item xs={12}>
              <div className={classes.buttons}>
                {(+match.params.id > 1) && (
                  <Button variant="contained" onClick={handleBack}>
                    back
                  </Button>)}

                {+match.params.id <= 2 && (
                  <Button onClick={handleClick} className={classes.button} variant="contained" color="primary">
                    {match.params.id === '1' ? 'Next' : 'Review'}
                  </Button>)}
              </div>
            </Grid>
            </React.Fragment>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}

const mapState = (state: PersonalInfoState) => ({
  firstName: state.firstName.value,
  middleName: state.middleName.value,
  lastName: state.lastName.value,
  email: state.email.value,
  options: state.musicalPreferences.options,
  preference: state.musicalPreferences.preference,
});

const connector = connect(mapState)


export default connector(Checkout);
