import React, { useState } from 'react';

function useForm(initialFormValues) {
  const [values, setValues] = useState(initialFormValues);

  // create input change handler
  const handleInputChange = e => {
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

function Form(props) {
  return (
    <form>
      {props.children}
    </form>
  );
}

export {
  useForm,
  Form,
};
