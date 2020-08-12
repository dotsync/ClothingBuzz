import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 1,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <Button variant="contained">Add Review</Button>
  );
}
