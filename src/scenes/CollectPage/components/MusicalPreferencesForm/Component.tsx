import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { setPreference } from '../../../../store/actionCreators'

const PersonalInfoForm = ({
  options,
  preference,
  error,
  dispatch
} : {
  options: Array<string>,
  error: boolean,
  preference: Array<string>,
  dispatch: any
}) => {
  const handleChange = (event: any) => {
    dispatch(setPreference(event.target.value))
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Which streaming services do you use?
      </Typography>
      <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
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
  );
}

const mapState = (state: PersonalInfoState) => ({
  options: state.musicalPreferences.options,
  preference: state.musicalPreferences.preference,
  error: state.musicalPreferences.error,
  errorText: state.musicalPreferences.errorText
});

const connector = connect(mapState)

export default connector(PersonalInfoForm);
