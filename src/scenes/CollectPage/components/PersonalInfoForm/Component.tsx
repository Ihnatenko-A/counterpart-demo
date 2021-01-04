import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { inputToState } from 'store/actionCreators'

import { useStyles } from './utils';
import { setError } from 'store/actionCreators'

const MusicalPreferencesForm = ({
  dispatch,
  firstName,
  middleName,
  lastName,
  email,
} : {
  dispatch: any,
  firstName: FormFieldParams,
  middleName: FormFieldParams,
  lastName: FormFieldParams,
  email: FormFieldParams,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const validateStepOne = () => {

    let isValid: boolean = true;
    const emailRegex = RegExp(/\S+@\S+\.\S+/);

    if (!firstName.value) {
      dispatch(setError('firstName'))
      isValid = false;
    }
    
    if (!lastName.value) {
      dispatch(setError('lastName'))
      isValid = false;
    }

    if (!email || !emailRegex.test(email.value)) {
      dispatch(setError('email'))
      isValid = false;
    }

    return isValid;
  }

  const onInput = (event: any) => {
    dispatch(inputToState(event))
  }

  const handleClick = () => {
    if (validateStepOne()) {
      history.push(`/collect/2`)
    }
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Enter your personal info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              onChange={onInput}
              fullWidth
              value={firstName.value}
              error={firstName.error}
              helperText={firstName.errorText}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              onChange={onInput}
              fullWidth
              value={lastName.value}
              error={lastName.error}
              helperText={lastName.errorText}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="middleName"
              name="middleName"
              label="Middle Name"
              onChange={onInput}
              fullWidth
              value={middleName.value}
              error={middleName.error}
              helperText={middleName.errorText}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email line"
              onChange={onInput}
              fullWidth
              value={email.value}
              error={email.error}
              helperText={email.errorText}
            />
          </Grid>

        </Grid>
      </React.Fragment>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttons}>
          <Button
            onClick={handleClick}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
}

const mapState = (state: PersonalInfoState) => ({
  firstName: state.firstName,
  middleName: state.middleName,
  lastName: state.lastName,
  email: state.email,
});

const connector = connect(mapState)

export default connector(MusicalPreferencesForm);
