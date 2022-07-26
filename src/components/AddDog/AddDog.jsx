import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio, Button, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddDog() {

  const dispatch = useDispatch();
  const history = useHistory();

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
  const [dogAge, setDogAge] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogGender, setDogGender] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogOrigin, setDogOrigin] = useState(3);
  const [dogRoute, setDogRoute] = useState(6);
  const [dropoff, setDropoff] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone1, setOwnerPhone1] = useState('');
  const [ownerPhone2, setOwnerPhone2] = useState('');
  const [pickup, setPickup] = useState('');

  /* When a day variable is changed, console.log the current value of each day */
  useEffect(() => {
    console.log('value of MTWRF:', monday, tuesday, wednesday, thursday, friday);
  }, [monday, tuesday, wednesday, thursday, friday]);

  const clearInputs = () => {
    history.push('/add');
  };

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

  const handleDogAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleDogAge = (e) => {
    setDogAge(e.target.value);
  };

  const handleDogBreed = (e) => {
    setDogBreed(e.target.value);
  };

  const handleDogGender = (e) => {
    setDogGender(e.target.value);
  }

  const handleDogName = (e) => {
    setDogName(e.target.value);
  };

  const handleDogOrigin = (e) => {
    setDogOrigin(e.target.value)
  };

  const handleDogRoute = (e) => {
    setDogRoute(e.target.value)
  };

  const handleDropoff = (e) => {
    setDropoff(e.target.value);
  };

  const handleOwnerEmail = (e) => {
    setOwnerEmail(e.target.value);
  };

  const handleOwnerName = (e) => {
    setOwnerName(e.target.value);
  };

  const handleOwnerPhone1 = (e) => {
    setOwnerPhone1(e.target.value);
  };

  const handleOwnerPhone2 = (e) => {
    setOwnerPhone2(e.target.value);
  };

  const handlePickup = (e) => {
    setPickup(e.target.value);
  };

  const sendDog = () => {
    let newDog = {
      dog_name: dogName,
      address: address,
      breed: dogBreed,
      age: dogAge,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      owner_name: ownerName,
      owner_email: ownerEmail,
      owner_phone_one: ownerPhone1,
      owner_phone_two: ownerPhone2,
      pick_up: pickup,
      drop_off: dropoff,
      originID: dogOrigin,
      driving_routeID: dogRoute,
      gender: dogGender
    };
    console.log(newDog);
    dispatch({ type: 'ADD_DOG', payload: newDog });
    clearInputs();
  }

  return (
    <div className='container'>
      <Grid container sx={{ alignItems: 'center' }}>

        <Grid item xs={1} >
          <h4>Dog Name:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleDogName} label="Dog" />
        </Grid>

        <Grid item xs={1} >
          <h4>Dog Gender:</h4>
        </Grid>

        <Grid item xs={5}>
          <RadioGroup row>
            <FormControlLabel value={'Male'} control={<Radio onChange={handleDogGender} />} label={'Male'} />
            <FormControlLabel value={'Female'} control={<Radio onChange={handleDogGender} />} label={'Female'} />
          </RadioGroup>
        </Grid>

        <Grid item xs={1} >
          <h4>Age:</h4>
        </Grid>

        <Grid item xs={5}>
          {/* Age: <TextField onChange={handleDogAge} label="Age" type="number"/> */}
          <RadioGroup row>
            <FormControlLabel value={'Puppy'} control={<Radio onChange={handleDogAge} />} label={'Puppy'} />
            <FormControlLabel value={'Young Adult'} control={<Radio onChange={handleDogAge} />} label={'Young Adult'} />
            <FormControlLabel value={'Mature Adult'} control={<Radio onChange={handleDogAge} />} label={'Mature Adult'} />
            <FormControlLabel value={'Senior Citizen'} control={<Radio onChange={handleDogAge} />} label={'Senior Citizen'} />
          </RadioGroup>
        </Grid>

        <Grid item xs={1} >
          <h4>Breed:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleDogBreed} label="Breed" />
        </Grid>

        <Grid item xs={1} >
          <h4>Address:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleDogAddress} label="Address" />
        </Grid>

        <Grid item xs={1} >
          <h4>Origin:</h4>
        </Grid>

        <Grid item xs={5}>
          {origins.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {origins.map((origin) => (
                <FormControlLabel key={origin.id} value={origin.id} control={<Radio onChange={handleDogOrigin} />} label={origin.type} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={1} >
          <h4>Owner Name:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerName} label="Owner" />
        </Grid>

        <Grid item xs={1} >
          <h4>Phone 1:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerPhone1} label="Phone (primary)" />
        </Grid>

        <Grid item xs={1} >
          <h4>Email:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerEmail} label="Email" />
        </Grid>

        <Grid item xs={1} >
          <h4>Phone 2:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerPhone2} label="Phone (secondary)" />
        </Grid>

        <Grid item xs={1} >
          <h4>Schedule:</h4>
        </Grid>

        <Grid item xs={5}>
          <FormGroup row>
            {/* checked={monday} */}
            <FormControlLabel label="M" control={<Checkbox onChange={handleMonday} />} labelPlacement="top" />
            <FormControlLabel label="T" control={<Checkbox onChange={handleTuesday} />} labelPlacement="top" />
            <FormControlLabel label="W" control={<Checkbox onChange={handleWednesday} />} labelPlacement="top" />
            <FormControlLabel label="R" control={<Checkbox onChange={handleThursday} />} labelPlacement="top" />
            <FormControlLabel label="F" control={<Checkbox onChange={handleFriday} />} labelPlacement="top" />
          </FormGroup><br />
        </Grid>

        <Grid item xs={1} >
          <h4>Route:</h4>
        </Grid>

        <Grid item xs={5}>
          {routes.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {routes.map((route) => (
                <FormControlLabel key={route.id} value={route.id} control={<Radio onChange={handleDogRoute} />} label={route.name} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={1} >
          <h4>Pick up:</h4>
        </Grid>

        <Grid item xs={11}>
          <TextField onChange={handlePickup} label="Pick Up Instructions" />
        </Grid>

        <Grid item xs={1} >
          <h4>Drop off:</h4>
        </Grid>

        <Grid item xs={11}>
          <TextField onChange={handleDropoff} label="Drop Off Instructions" />
        </Grid>

        <Grid item xs={6}>
          <Button onClick={clearInputs} color="secondary">Clear</Button>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={sendDog}>Save</Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default AddDog;
