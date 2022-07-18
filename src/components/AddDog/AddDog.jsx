import { Checkbox, FormControlLabel, FormGroup, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';


function AddDog() {

  const [monday, setMonday] = useState(true);
  const handleMonday = () => {
    setMonday(!monday)
    console.log(monday);
  };

  return (
    <div>
    Dog Name: <TextField label="Dog" /><br/>
    Address: <TextField label="Address" /><br/>
    Breed: <TextField label="Breed" /><br/>
    {/* Add schedule options */}
    <FormGroup row>
      <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
      <FormControlLabel label="T" control={<Checkbox />} labelPlacement="top" />
      <FormControlLabel label="W" control={<Checkbox />} labelPlacement="top" />
      <FormControlLabel label="R" control={<Checkbox />} labelPlacement="top" />
      <FormControlLabel label="F" control={<Checkbox />} labelPlacement="top" />
    </FormGroup><br/>
    Owner Name: <TextField label="Owner" /><br/>
    Owner Email: <TextField label="Email" /><br/>
    Pick Up: <TextField label="Pick Up Instructions" /><br/>
    Drop Off: <TextField label="Drop Off Instructions" /><br/>
    Age: <TextField label="Age" /><br/>
    {/* origin */}
    {/* route */}
    Owner Phone 1: <TextField label="Phone (primary)" /><br/>
    Owner Phone 2: <TextField label="Phone (secondary)" /><br/>
  </div>

  );
}

export default AddDog;
