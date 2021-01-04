import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const ReviewStep = ({
    firstName,
    middleName,
    lastName,
    email,
    preferences
  }: {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    preferences: Array<string>
  }) => {

  const classes = useStyles();
  
  return (
    <React.Fragment>

      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="First Name" />
          <Typography variant="body2">{firstName}</Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Middle Name" />
          <Typography variant="body2">{middleName}</Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Last Name" />
          <Typography variant="body2">{lastName}</Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Email" />
          <Typography variant="body2">{email}</Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Musical preferences" />
          <Typography gutterBottom>{preferences.join(', ')}</Typography>
        </ListItem>

      </List>
    </React.Fragment>
  );
}

const mapState = (state: PersonalInfoState) => ({
  firstName: state.firstName.value,
  middleName: state.middleName.value,
  lastName: state.lastName.value,
  email: state.email.value,
  preferences: state.musicalPreferences.preference,
});

const connector = connect(mapState)


export default connector(ReviewStep);
