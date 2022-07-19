import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function EditDog() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  let { id } = useParams();

  /* Reducers */
  const origins = useSelector((store) => store.origins);
  const routes = useSelector((store) => store.routes);
  const details = useSelector((store) => store.details);

  /* Send dispatches to start SAGAs */
  useEffect(() => {
    dispatch({ type: 'GET_ORIGINS' });
    dispatch({ type: 'GET_ROUTES' });
    dispatch({type: 'GET_DETAILS', payload: id});
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

  /* When details is updated, run this conditional and if it's true, set the hooks to the values coming in from the details reducer */
  useEffect(() => {
    if(details.length > 0) {
      setMonday(details[0].monday);
      setTuesday(details[0].tuesday);
      setWednesday(details[0].wednesday);
      setThursday(details[0].thursday);
      setFriday(details[0].friday);
      
      setAddress(details[0].address)
      setDogAge(details[0].age);
      setDogBreed(details[0].breed);
      setDogName(details[0].dog_name);
      setDogOrigin(details[0].originID);
      setDogRoute(details[0].driving_routeID);
      setDropoff(details[0].drop_off);
      setOwnerEmail(details[0].pick_up);
      setOwnerName(details[0].owner_name);
      setOwnerPhone1(details[0].owner_phone_one);
      setOwnerPhone2(details[0].owner_phone_two);
      setPickup(details[0].pick_up);
    }
  }, [details])

  const goBack = () => {
    history.push(`/details/${id}`);
  };

  /* ///// Event handler's for Schedule ///// */
  const handleMonday = () => {
    setMonday(!monday);
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
  
  const handleDogName = (e) => {
    setDogName(e.target.value);
  };

  const handleDogOrigin = (e) => {
    setDogOrigin(e.target.value)
    console.log(e.target.value);
  };

  const handleDogRoute = (e) => {
    setDogRoute(e.target.value)
    console.log(e.target.value);
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
      id: id
    };
    console.log('info to update:', newDog);
    dispatch({type: 'UPDATE_DOG', payload: newDog});
    // goBack();
  }

  return (
    <div className='container'>
      {
        details.length > 0 ?
        <Grid container>

        <Grid item xs={12}>
          Dog Name: <TextField onChange={handleDogName} label="Dog" defaultValue={details[0].dog_name}/>
        </Grid>

        <Grid item xs={6}>
          Age: <TextField onChange={handleDogAge} label="Age" type="number" defaultValue={details[0].age}/>
        </Grid>

        <Grid item xs={6}>
          Breed: <TextField onChange={handleDogBreed} label="Breed" defaultValue={details[0].type}/>
        </Grid>

        <Grid item xs={6}>
          Address: <TextField onChange={handleDogAddress} label="Address" defaultValue={details[0].address}/>
        </Grid>

        {/* origin */}
        {/* {
      origins.length === 0 ?
      <Grid item xs={6}>
      <p>Loading . . .</p>
      </Grid>
      :
      <Grid item xs={6}>
        <p>Origin Map:</p>
        <RadioGroup>
          {origins.map((origin)=>(
            <FormControlLabel key={origin.id} value={origin.id} control={<Radio  onChange={handleDogOrigin} />} label={origin.type} />
          ))}
        </RadioGroup>
      </Grid>
      } */}

        <Grid item xs={6}>
          Origin:
          {origins.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {origins.map((origin) => (
                <FormControlLabel key={origin.id} value={origin.id} control={<Radio onChange={handleDogOrigin} checked={dogOrigin == origin.id}/>} label={origin.type} />
              ))}
            </RadioGroup>}
        </Grid>
      
        <Grid item xs={6}>
          Owner Name: <TextField onChange={handleOwnerName} label="Owner" defaultValue={details[0].owner_name}/>
        </Grid>

        <Grid item xs={6}>
          Owner Phone 1: <TextField onChange={handleOwnerPhone1} label="Phone (primary)" type="number" defaultValue={details[0].owner_phone_one}/>
        </Grid>

        <Grid item xs={6}>
          Owner Email: <TextField onChange={handleOwnerEmail} label="Email" defaultValue={details[0].owner_email}/>
        </Grid>

        <Grid item xs={6}>
          Owner Phone 2: <TextField onChange={handleOwnerPhone2} label="Phone (secondary)" type="number" defaultValue={details[0].owner_phone_two}/>
        </Grid>

        <Grid item xs={6}>
          Schedule: <FormGroup row>
            {/* checked={monday} */}
            <FormControlLabel label="M" control={<Checkbox checked={monday} onChange={handleMonday} />} labelPlacement="top" />
            <FormControlLabel label="T" control={<Checkbox checked={tuesday} onChange={handleTuesday} />} labelPlacement="top" />
            <FormControlLabel label="W" control={<Checkbox checked={wednesday} onChange={handleWednesday} />} labelPlacement="top" />
            <FormControlLabel label="R" control={<Checkbox checked={thursday} onChange={handleThursday} />} labelPlacement="top" />
            <FormControlLabel label="F" control={<Checkbox checked={friday} onChange={handleFriday} />} labelPlacement="top" />
          </FormGroup><br />
        </Grid>

        <Grid item xs={6}>
          Route:
          {routes.length > 0 &&
            <RadioGroup row defaultValue={0}>
              {routes.map((route) => (
                <FormControlLabel key={route.id} value={route.id} control={<Radio onChange={handleDogRoute} checked={dogRoute == route.id}/>} label={route.name} />
              ))}
            </RadioGroup>}
        </Grid>

        <Grid item xs={12}>
          Pick Up: <TextField onChange={handlePickup} label="Pick Up Instructions" defaultValue={details[0].pick_up}/>
        </Grid>

        <Grid item xs={12}>
          Drop Off: <TextField onChange={handleDropoff} label="Drop Off Instructions" defaultValue={details[0].drop_off}/>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={goBack}>Cancel</Button>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={sendDog}>Save</Button>
        </Grid>

      </Grid>
      :
      <p>Loading</p>
      }
      
     
    </div>
  );
}

export default EditDog;
