import { Checkbox, FormControlLabel, FormGroup, TextField, Grid, RadioGroup, Radio, Button, Snackbar, Alert, } from '@mui/material';
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
  const addAlert = useSelector((store) => store.addAlert);
  let cloudImage = useSelector(store => store.image);

  /* Send dispatches to start SAGAs */
  useEffect(() => {
    dispatch({type: 'CLEAR_IMAGE'});
    dispatch({ type: 'GET_ORIGINS' });
    dispatch({ type: 'GET_ROUTES' });
  }, []);

  /* For the snackbar, if adding a dog was a success, fire off the snackbar flow */
  useEffect(() => {
    if(addAlert === true) {
      setOpen(true);
    }
  }, [addAlert])

  /* Set the image source as the image from the reducer once it's filled with the image data */
  useEffect(() => {
    if(cloudImage.length > 0) {
      setImageToShow(cloudImage)
    };
  }, [cloudImage])

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

  const [open, setOpen] = useState(false);

  const [imageSelected, setImageSelected] = useState('');
  const [imageToShow, setImageToShow] = useState('')

  /* When a day variable is changed, console.log the current value of each day */
  useEffect(() => {
    console.log('value of MTWRF:', monday, tuesday, wednesday, thursday, friday);
  }, [monday, tuesday, wednesday, thursday, friday]);

  const clearInputs = () => {
    history.push('/add');
    dispatch({type: 'CLEAR_IMAGE'});
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

  const handleAutoFill = () => {
    setAddress('5783 Xerxes Ave E, Minneapolis, MN, 55410');
    setDogBreed('Golden Retriever');
    setDogName('Frank');
    setDropoff('Back door off the porch. Key. In crate');
    setOwnerEmail('steve@gmail.com');
    setOwnerName('Steve Hall');
    setOwnerPhone1('651-123-4567');
    setOwnerPhone2('651-098-7654');
    setPickup('Back door off the porch. Key. Put back in crate');
  }

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

  const handleImage = (event) => {
    setImageSelected(event.target.files[0]);
  }

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

  const handleSnackbarClose = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    // this flow to reset the state seems messy
    setOpen(false);
    dispatch({type: 'ADD_ALERT', payload: false});
  }

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
      gender: dogGender,
      image: imageToShow,
    };
    console.log(newDog);
    dispatch({ type: 'ADD_DOG', payload: newDog });
    clearInputs();
  }

  const uploadImage = () => {
    console.log(imageSelected);
    let imageToSend = new FormData();
    imageToSend.append('file', imageSelected);
    console.log(imageToSend);
    dispatch({type: 'SEND_IMAGE', payload: imageToSend});
  }

  return (
    <div className='container'>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        // message="Dog Added"
        onClose={handleSnackbarClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
        You added a dog!
        </Alert>
      </Snackbar>
      
      <Grid container sx={{ alignItems: 'center' }}>

        <Grid item xs={12}>
          <img src={imageToShow}/>
        </Grid>

        <Grid item xs={12}>
          <input onChange={handleImage} type="file" accept="image/*"/>
          <Button onClick={uploadImage}>Upload Image</Button>
        </Grid>

        <Grid item xs={1} >
          <h4 onClick={handleAutoFill}>Dog Name:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleDogName} label="Dog" value={dogName}/>
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
          <TextField onChange={handleDogBreed} label="Breed" value={dogBreed}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Address:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleDogAddress} label="Address" value={address} />
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
          <TextField onChange={handleOwnerName} label="Owner" value={ownerName}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Phone 1:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerPhone1} label="Phone (primary)" value={ownerPhone1}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Email:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerEmail} label="Email" value={ownerEmail}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Phone 2:</h4>
        </Grid>

        <Grid item xs={5}>
          <TextField onChange={handleOwnerPhone2} label="Phone (secondary)" value={ownerPhone2}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Schedule:</h4>
        </Grid>

        <Grid item xs={5}>
          <FormGroup row>
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
          <TextField onChange={handlePickup} label="Pick Up Instructions" className="instructions" value={pickup}/>
        </Grid>

        <Grid item xs={1} >
          <h4>Drop off:</h4>
        </Grid>

        <Grid item xs={11}>
          <TextField onChange={handleDropoff} label="Drop Off Instructions" className="instructions" value={dropoff}/>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={clearInputs} color="secondary">Clear</Button>
        </Grid>

        <Grid item xs={6}>
          <Button onClick={sendDog} color="success">Save</Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default AddDog;
