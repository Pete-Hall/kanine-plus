import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';


function AddDog() {

  const dispatch = useDispatch();
  const origins = useSelector((store) => store.origins);

  useEffect(() => {
    dispatch({type: 'GET_ORIGINS'});
    dispatch({type: 'GET_ROUTES'});
  }, []);

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

  const handleOrigin = (event) => {
    console.log(event.target.value)
  };

  const handleRoute = (event) => {
    console.log(event.target.value)
  };
  

  return (
    <div className='container'>
    <Grid container>

      <Grid item xs={12}>
        Dog Name: <TextField label="Dog" />
      </Grid>

      <Grid item xs={6}>
        Age: <TextField label="Age" />
      </Grid>

      <Grid item xs={6}>
        Breed: <TextField label="Breed" />
      </Grid>

      <Grid item xs={6}>
        Address: <TextField label="Address" />
      </Grid>

        {/* origin */}
      {/* {
      origins.length < 0 ?
      <Grid item xs={6}>
      <p>Loading . . .</p>
      </Grid>
      :
      <Grid item xs={6}>
        <p>Origin Map:</p>
        <RadioGroup>
          {origins.map((origin)=>(
            <FormControlLabel key={origin.id} value={origin.id} control={<Radio  onChange={handleOrigin} />} label={origin.type} />
          ))}
        </RadioGroup>
      </Grid>
      } */}
      
      {/* Working conditional rendering with MAPPING */}
      <Grid item xs={6}>
        Origin:
        {origins.length > 0 &&
        <RadioGroup row defaultValue={0}>
          {origins.map((origin)=>(
            <FormControlLabel key={origin.id} value={origin.id} control={<Radio  onChange={handleOrigin} />} label={origin.type} />
          ))}
        </RadioGroup>}
      </Grid>

      <Grid item xs={6}>
        Owner Name: <TextField label="Owner" />
      </Grid>

      <Grid item xs={6}>
        Owner Phone 1: <TextField label="Phone (primary)" />
      </Grid>

      <Grid item xs={6}>
        Owner Email: <TextField label="Email" />
      </Grid>

      <Grid item xs={6}>
        Owner Phone 2: <TextField label="Phone (secondary)" />
      </Grid>

      {/* Add schedule options */}
      <Grid item xs={6}>
        Schedule: <FormGroup row>
          {/* checked={monday} */}
          <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
          <FormControlLabel label="T" control={<Checkbox onChange={handleTuesday}  />} labelPlacement="top" />
          <FormControlLabel label="W" control={<Checkbox onChange={handleWednesday}/>} labelPlacement="top" />
          <FormControlLabel label="R" control={<Checkbox onChange={handleThursday} />} labelPlacement="top" />
          <FormControlLabel label="F" control={<Checkbox onChange={handleFriday} />} labelPlacement="top" />
        </FormGroup><br/>
      </Grid>

      <Grid item xs={6}>
        {/* route */}
        Route: <RadioGroup row defaultValue="0">
          <FormControlLabel value="1" control={<Radio onChange={handleRoute} />} label="Emerson" />
          <FormControlLabel value="2" control={<Radio onChange={handleRoute} />} label="Tangletown" />
          <FormControlLabel value="3" control={<Radio onChange={handleRoute} />} label="Misfits" />
          <FormControlLabel value="4" control={<Radio onChange={handleRoute} />} label="Far" />
          <FormControlLabel value="5" control={<Radio onChange={handleRoute} />} label="Floater" />
      </RadioGroup>
      </Grid>

      <Grid item xs={12}>
        Pick Up: <TextField label="Pick Up Instructions" />
      </Grid>

      <Grid item xs={12}>
        Drop Off: <TextField label="Drop Off Instructions" />
      </Grid>

    </Grid>
  </div>

  );
}

export default AddDog;
