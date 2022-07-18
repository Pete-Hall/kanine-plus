import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
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

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <div className='container'>
    <Grid container>
      <Grid item xs={6}>
        Dog Name: <TextField label="Dog" />
      </Grid>
      <Grid item xs={6}>
        Address: <TextField label="Address" />
      </Grid>
      <Grid item xs={6}>
        Breed: <TextField label="Breed" />
      </Grid>
      {/* Add schedule options */}
      <Grid item xs={6}>
        <FormGroup row>
          {/* checked={monday} */}
          <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
          <FormControlLabel label="T" control={<Checkbox onChange={handleTuesday}  />} labelPlacement="top" />
          <FormControlLabel label="W" control={<Checkbox onChange={handleWednesday}/>} labelPlacement="top" />
          <FormControlLabel label="R" control={<Checkbox onChange={handleThursday} />} labelPlacement="top" />
          <FormControlLabel label="F" control={<Checkbox onChange={handleFriday} />} labelPlacement="top" />
        </FormGroup><br/>
      </Grid>
      <Grid item xs={6}>
        Owner Name: <TextField label="Owner" />
      </Grid>
      <Grid item xs={6}>
        Owner Email: <TextField label="Email" />
      </Grid>
      <Grid item xs={6}>
        Pick Up: <TextField label="Pick Up Instructions" />
      </Grid>
      <Grid item xs={6}>
        Drop Off: <TextField label="Drop Off Instructions" />
      </Grid>
      <Grid item xs={6}>
        Age: <TextField label="Age" />
      </Grid>
      <Grid item xs={6}>
        {/* origin */}
      </Grid>
      <Grid item xs={6}>
        {/* route */}
      </Grid>
      <Grid item xs={6}>
        Owner Phone 1: <TextField label="Phone (primary)" />
      </Grid>
      <Grid item xs={6}>
        Owner Phone 2: <TextField label="Phone (secondary)" />
      </Grid>
    </Grid>
  </div>

  );
}

export default AddDog;
