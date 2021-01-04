import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { setError, nextStep, prevStep, setPreference } from 'store/actionCreators';
import { isEmptyArray } from 'helpers/validators';

const PersonalInfoForm = ({
  options,
  preference,
  error,
  dispatch,
} : {
  options: Array<string>,
  error: boolean,
  preference: Array<string>,
  dispatch: any,
}) => {
  const classes = useStyles();

  const validateStepTwo = () => {

    let isValid: boolean = true;

    if (!isEmptyArray(preference)) {
      dispatch(setError('musicalPreferences'));
      isValid = false;
    }

    return isValid;
  };

  const handleClick = () => {
    if (validateStepTwo()) {
      dispatch(nextStep());
    }
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  const handleChange = (event: any) => {
    dispatch(setPreference(event.target.value));
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Which streaming services do you use?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={preference}
                onChange={handleChange}
                fullWidth
                error={error}
              >
                {options.map((name: string) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </React.Fragment>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttons}>
          <Button variant="contained" onClick={handleBack}>
            back
          </Button>

          <Button
            onClick={handleClick}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Review
          </Button>
        </div>
      </Grid>
    </React.Fragment>
  );
};

const mapState = (state: PersonalInfoState) => ({
  options: state.musicalPreferences.options,
  preference: state.musicalPreferences.preference,
  error: state.musicalPreferences.error,
  errorText: state.musicalPreferences.errorText
});

const connector = connect(mapState);

export default connector(PersonalInfoForm);
