import React, { useState } from 'react';

export default function useForm(initialFormValues) {
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
