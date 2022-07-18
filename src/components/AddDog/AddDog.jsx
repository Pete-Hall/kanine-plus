import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function AddDog() {

  const dispatch = useDispatch();

  /* Reducers */
  const origins = useSelector((store) => store.origins);
  const routes = useSelector((store) => store.routes);

  /* Send dispatches to start SAGAs */
  useEffect(() => {
    dispatch({ type: 'GET_ORIGINS' });
    dispatch({ type: 'GET_ROUTES' });
  }, []);

  /* Hooks */
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);

  const [address, setAddress] = useState('');
  const [dogAge, setDogAge] = useState(0);
  const [dogBreed, setDogBreed] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogOrigin, setDogOrigin] = useState('');
  const [dogRoute, setDogRoute] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone1, setOwnerPhone1] = useState(0);
  const [ownerPhone2, setOwnerPhone2] = useState(0);
  const [pickup, setPickup] = useState('');

  /* When a day variable is changed, console.log the current value of each day */
  useEffect(() => {
    console.log('value of MTWRF:', monday, tuesday, wednesday, thursday, friday);
  }, [monday, tuesday, wednesday, thursday, friday]);

  /* ///// Event handler's for Schedule ///// */
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
  /*///////////////////////////////////////*/

  const handleDogName = (e) => {
    console.log(e.target.value);
  }

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
          Dog Name: <TextField onChange={handleDogName} label="Dog" />
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

        <Grid item xs={6}>
          Origin:
          {origins.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {origins.map((origin) => (
                <FormControlLabel key={origin.id} value={origin.id} control={<Radio onChange={handleOrigin} />} label={origin.type} />
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

        <Grid item xs={6}>
          Schedule: <FormGroup row>
            {/* checked={monday} */}
            <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
            <FormControlLabel label="T" control={<Checkbox onChange={handleTuesday} />} labelPlacement="top" />
            <FormControlLabel label="W" control={<Checkbox onChange={handleWednesday} />} labelPlacement="top" />
            <FormControlLabel label="R" control={<Checkbox onChange={handleThursday} />} labelPlacement="top" />
            <FormControlLabel label="F" control={<Checkbox onChange={handleFriday} />} labelPlacement="top" />
          </FormGroup><br />
        </Grid>

        <Grid item xs={6}>
          Route:
          {routes.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {routes.map((route) => (
                <FormControlLabel key={route.id} value={route.id} control={<Radio onChange={handleRoute} />} label={route.name} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={12}>
          Pick Up: <TextField label="Pick Up Instructions" />
        </Grid>

        <Grid item xs={12}>
          Drop Off: <TextField label="Drop Off Instructions" />
        </Grid>

        <Grid item xs={6}>
          <Button>Cancel</Button>
        </Grid>

        <Grid item xs={6}>
          <Button>Save</Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default AddDog;
