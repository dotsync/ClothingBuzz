import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

function useForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);

  // create input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // change values object
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

// custom styles for form controls
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
}

export {
  useForm,
  Form,
};
