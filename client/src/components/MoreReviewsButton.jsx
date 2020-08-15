/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import material ui
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal, Button, Grid, Paper,
} from '@material-ui/core/';

export default function MoreReviewsButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={props.onClick}
      >
        More reviews
      </Button>
    </div>
  );
}
