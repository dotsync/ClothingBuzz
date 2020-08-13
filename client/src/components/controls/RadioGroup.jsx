import React from 'react';
import {
  FormControl, FormControlLabel, Grid, FormLabel, Radio, RadioGroup as MuiRadioGroup,
} from '@material-ui/core';

export default function RadioGroup(props) {
  const {
    name, label, value, onChange, items,
  } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          items.map(
            (item, i) => (
              <FormControlLabel
                key={i}
                value={item.id}
                control={<Radio />}
                label={item.title}
              />
            ),
          )
        }
      </MuiRadioGroup>
    </FormControl>
  );
}
