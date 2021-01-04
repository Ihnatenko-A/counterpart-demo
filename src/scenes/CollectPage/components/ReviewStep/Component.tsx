import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import { useStyles } from './utils';

const ReviewStep = ({
    firstName,
    middleName,
    lastName,
    email,
    preferences
  }: {
    firstName: FormFieldParams,
    middleName: FormFieldParams,
    lastName: FormFieldParams,
    email: FormFieldParams,
    preferences: Array<string>
  }) => {

  const classes = useStyles();
  
  const history = useHistory();

  const handleBack = () => {
    history.push(`/collect/2`)
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <React.Fragment>
          <List disablePadding>
            <ListItem className={classes.listItem}>
              <ListItemText primary="First Name" />
              <Typography variant="body2">{firstName.value}</Typography>
            </ListItem>

            {middleName.value && (
            <ListItem className={classes.listItem}>
              <ListItemText primary="Middle Name" />
              <Typography variant="body2">{middleName.value}</Typography>
            </ListItem>)}

            <ListItem className={classes.listItem}>
              <ListItemText primary="Last Name" />
              <Typography variant="body2">{lastName.value}</Typography>
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemText primary="Email" />
              <Typography variant="body2">{email.value}</Typography>
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemText primary="Musical preferences" />
              <Typography gutterBottom>{preferences.join(', ')}</Typography>
            </ListItem>

          </List>
        </React.Fragment>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttons}>
          <Button variant="contained" onClick={handleBack}>
            back
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
  preferences: state.musicalPreferences.preference,
});

const connector = connect(mapState)


export default connector(ReviewStep);
