import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { inputToState } from '../../../../store/actionCreators'

const MusicalPreferencesForm = ({
  dispatch,
  firstName,
  firstNameError,
  firstNameErrorText,
  middleName,
  middleNameError,
  middleNameErrorText,
  lastName,
  lastNameError,
  lastNameErrorText,
  email,
  emailError,
  emailErrorText,
} : {
  dispatch: any,
  firstName: string,
  firstNameError: boolean,
  firstNameErrorText: string,
  middleName: string,
  middleNameError: boolean,
  middleNameErrorText: string,
  lastName: string,
  lastNameError: boolean,
  lastNameErrorText: string,
  email: string,
  emailError: boolean,
  emailErrorText: string,
  }) => {

  const onInput = (event: any) => {
    dispatch(inputToState(event))
  }

  return (
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
            autoComplete="given-name"
            value={firstName}
            error={firstNameError}
            helperText={firstNameError && firstNameErrorText}
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
            value={lastName}
            error={lastNameError}
            helperText={lastNameError && lastNameErrorText}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Middle Name"
            onChange={onInput}
            fullWidth
            value={middleName}
            error={middleNameError}
            helperText={middleNameError && middleNameErrorText}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email line"
            onChange={onInput}
            fullWidth
            value={email}
            error={emailError}
            helperText={emailError && emailErrorText}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

const mapState = (state: PersonalInfoState) => ({
  firstName: state.firstName.value,
  firstNameError: state.firstName.error,
  firstNameErrorText: state.firstName.errorText,
  middleName: state.middleName.value,
  middleNameError: state.middleName.error,
  middleNameErrorText: state.middleName.errorText,
  lastName: state.lastName.value,
  lastNameError: state.lastName.error,
  lastNameErrorText: state.lastName.errorText,
  email: state.email.value,
  emailError: state.email.error,
  emailErrorText: state.email.errorText,
});

const connector = connect(mapState)

export default connector(MusicalPreferencesForm);
