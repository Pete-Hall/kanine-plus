import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio, Button, Select, MenuItem } from '@mui/material';
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
  const [dogOrigin, setDogOrigin] = useState(0);
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
    dispatch({type: 'ADD_DOG', payload: newDog});
    clearInputs();
  }

  return (
    <div className='container'>
      <Grid container>

        <Grid item xs={6}>
          Dog Name: <TextField onChange={handleDogName} label="Dog"/>
        </Grid>

        <Grid item xs={6}>
          Gender: <RadioGroup row>
            <FormControlLabel value={'Male'} control={<Radio onChange={handleDogGender}/>} label={'Male'} />
            <FormControlLabel value={'Female'} control={<Radio onChange={handleDogGender}/>} label={'Female'} />
          </RadioGroup>
        </Grid>

        <Grid item xs={6}>
          {/* Age: <TextField onChange={handleDogAge} label="Age" type="number"/> */}
          Age: <RadioGroup row>
            <FormControlLabel value={'Puppy'} control={<Radio onChange={handleDogAge}/>} label={'Puppy'} />
            <FormControlLabel value={'Young Adult'} control={<Radio onChange={handleDogAge}/>} label={'Young Adult'} />
            <FormControlLabel value={'Mature Adult'} control={<Radio onChange={handleDogAge}/>} label={'Mature Adult'} />
            <FormControlLabel value={'Senior Citizen'} control={<Radio onChange={handleDogAge}/>} label={'Senior Citizen'} />
          </RadioGroup>
        </Grid>

        <Grid item xs={6}>
          Breed: <TextField onChange={handleDogBreed} label="Breed"/>
        </Grid>

        <Grid item xs={6}>
          Address: <TextField onChange={handleDogAddress} label="Address"/>
        </Grid>

        <Grid item xs={6}>
          Origin:
          {origins.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {origins.map((origin) => (
                <FormControlLabel key={origin.id} value={origin.id} control={<Radio onChange={handleDogOrigin} />} label={origin.type} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={6}>
          Owner Name: <TextField onChange={handleOwnerName} label="Owner"/>
        </Grid>

        <Grid item xs={6}>
          Owner Phone 1: <TextField onChange={handleOwnerPhone1} label="Phone (primary)" type="number"/>
        </Grid>

        <Grid item xs={6}>
          Owner Email: <TextField onChange={handleOwnerEmail} label="Email"/>
        </Grid>

        <Grid item xs={6}>
          Owner Phone 2: <TextField onChange={handleOwnerPhone2} label="Phone (secondary)" type="number"/>
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
                <FormControlLabel key={route.id} value={route.id} control={<Radio onChange={handleDogRoute} />} label={route.name} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={12}>
          Pick Up: <TextField onChange={handlePickup} label="Pick Up Instructions"/>
        </Grid>

        <Grid item xs={12}>
          Drop Off: <TextField onChange={handleDropoff} label="Drop Off Instructions"/>
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
