import { Checkbox, FormControlLabel, FormGroup, TextField, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';


function AddDog() {

  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);


  useEffect(()=>{
    console.log('value of MTWRF:', monday, tuesday, wednesday, thursday, friday);
  }, [monday, tuesday, wednesday, thursday, friday]);

  const handleMonday = () => {
    setMonday(!monday)
  };

  const handleTuesday = () => {
    setTuesday(!tuesday);
  };

  const handleWednesday = () => {
    setWednesday(!wednesday);
  };

  const handleThursday = () => {
    setThursday(!thursday);
  };

  const handleFriday = () => {
    setFriday(!friday);
  };

  return (
    <div>
    Dog Name: <TextField label="Dog" /><br/>
    Address: <TextField label="Address" /><br/>
    Breed: <TextField label="Breed" /><br/>
    {/* Add schedule options */}
    <FormGroup row>
      {/* checked={monday} */}
      <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
      <FormControlLabel label="T" control={<Checkbox onChange={handleTuesday}  />} labelPlacement="top" />
      <FormControlLabel label="W" control={<Checkbox onChange={handleWednesday}/>} labelPlacement="top" />
      <FormControlLabel label="R" control={<Checkbox onChange={handleThursday} />} labelPlacement="top" />
      <FormControlLabel label="F" control={<Checkbox onChange={handleFriday} />} labelPlacement="top" />
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
