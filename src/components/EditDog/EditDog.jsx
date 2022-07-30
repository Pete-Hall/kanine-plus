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
  let cloudImage = useSelector(store => store.image);

  /* Send dispatches to start SAGAs */
  useEffect(() => {
    dispatch({ type: 'GET_ORIGINS' });
    dispatch({ type: 'GET_ROUTES' });
    dispatch({ type: 'GET_DETAILS', payload: id });
  }, []);

  /* Set the image source as the image from the reducer once it's filled with the image data */
  useEffect(() => {
    if(cloudImage.length > 0) {
      setImageToShow(cloudImage)
    };
  }, [cloudImage])

  /* Hooks */ // could replace this with one hook (ex formData) and put an object of each hook in the useState. Spread operator to only update one in setFormDate
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

  const [imageSelected, setImageSelected] = useState('');
  const [imageToShow, setImageToShow] = useState('')


  /* When a day variable is changed, console.log the current value of each day */
  useEffect(() => {
    console.log('value of MTWRF:', monday, tuesday, wednesday, thursday, friday);
  }, [monday, tuesday, wednesday, thursday, friday]);

  /* When details is updated, run this conditional and if it's true, set the hooks to the values coming in from the details reducer */
  useEffect(() => {
    if (details.length > 0) {
      setMonday(details[0].monday);
      setTuesday(details[0].tuesday);
      setWednesday(details[0].wednesday);
      setThursday(details[0].thursday);
      setFriday(details[0].friday);

      setAddress(details[0].address)
      setDogAge(details[0].age);
      setDogBreed(details[0].breed);
      setDogGender(details[0].gender);
      setDogName(details[0].dog_name);
      setDogOrigin(details[0].originID);
      setDogRoute(details[0].driving_routeID);
      setDropoff(details[0].drop_off);
      setOwnerEmail(details[0].owner_email);
      setOwnerName(details[0].owner_name);
      setOwnerPhone1(details[0].owner_phone_one);
      setOwnerPhone2(details[0].owner_phone_two);
      setPickup(details[0].pick_up);
    }
  }, [details])

  const deleteDog = () => {
    console.log('delete dog:', details[0].id);
    if (confirm(`Are you sure you want to delete ${details[0].dog_name} and all of their data? This action cannot be undone`)) {
      alert(`You have successfully removed ${details[0].dog_name}.`);
      dispatch({ type: 'DELETE_DOG', payload: details[0].id });
      history.push('/list');
    } else {
      alert(`Nothing has been deleted for ${details[0].dog_name}`);
    }

  }

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

  const handleDogGender = (e) => {
    setDogGender(e.target.value);
  }

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
      id: id,
      gender: dogGender,
      image: imageToShow,
    };
    console.log('info to update:', newDog);
    dispatch({ type: 'UPDATE_DOG', payload: newDog });
    dispatch({type: 'CLEAR_IMAGE'});
    goBack();
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
      {
        details.length > 0 ?
          <Grid container sx={{ alignItems: 'center' }}>

            <Grid item xs={4}>
              <img src={details[0].image} />
            </Grid>

            <Grid item xs={2}>
              <img src={imageToShow} />
            </Grid>

            <Grid item xs={12}>
              <input onChange={handleImage} type="file" accept="image/*" />
              <Button onClick={uploadImage}>Upload New Image</Button>
            </Grid>

            <Grid item xs={1} >
              <h4>Dog Name:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField required onChange={handleDogName} label="Dog" defaultValue={details[0].dog_name} />
            </Grid>

            <Grid item xs={1} >
              <h4>Dog Gender:</h4>
            </Grid>

            <Grid item xs={5}>
              <RadioGroup row>
                <FormControlLabel value={'Male'} control={<Radio onChange={handleDogGender} checked={dogGender === 'Male'} />} label={'Male'} />
                <FormControlLabel value={'Female'} control={<Radio onChange={handleDogGender} checked={dogGender === 'Female'} />} label={'Female'} />
              </RadioGroup>
            </Grid>

            <Grid item xs={1} >
              <h4>Age:</h4>
            </Grid>

            <Grid item xs={5}>
              {/* Age: <TextField onChange={handleDogAge} label="Age" type="number" defaultValue={details[0].age}/> */}
              <RadioGroup row>
                <FormControlLabel value={'Puppy'} control={<Radio onChange={handleDogAge} checked={dogAge === 'Puppy'} />} label={'Puppy'} />
                <FormControlLabel value={'Young Adult'} control={<Radio onChange={handleDogAge} checked={dogAge === 'Young Adult'} />} label={'Young Adult'} />
                <FormControlLabel value={'Mature Adult'} control={<Radio onChange={handleDogAge} checked={dogAge === 'Mature Adult'} />} label={'Mature Adult'} />
                <FormControlLabel value={'Senior Citizen'} control={<Radio onChange={handleDogAge} checked={dogAge === 'Senior Citizen'} />} label={'Senior Citizen'} />
              </RadioGroup>
            </Grid>

            <Grid item xs={1} >
              <h4>Breed:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleDogBreed} label="Breed" defaultValue={details[0].breed} />
            </Grid>

            <Grid item xs={1} >
              <h4>Address:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleDogAddress} label="Address" defaultValue={details[0].address} />
            </Grid>

            <Grid item xs={1} >
              <h4>Origin:</h4>
            </Grid>

            <Grid item xs={5}>
              {origins.length > 0 &&
                <RadioGroup row defaultValue={0}>
                  {origins.map((origin) => (
                    <FormControlLabel key={origin.id} value={origin.id} control={<Radio onChange={handleDogOrigin} checked={dogOrigin == origin.id} />} label={origin.type} />
                  ))}
                </RadioGroup>}
            </Grid>

            <Grid item xs={1} >
              <h4>Owner Name:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleOwnerName} label="Owner" defaultValue={details[0].owner_name} />
            </Grid>

            <Grid item xs={1} >
              <h4>Phone 1:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleOwnerPhone1} label="Phone (primary)" defaultValue={details[0].owner_phone_one} />
            </Grid>

            <Grid item xs={1} >
              <h4>Email:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleOwnerEmail} label="Email" defaultValue={details[0].owner_email} />
            </Grid>

            <Grid item xs={1} >
              <h4>Phone 2:</h4>
            </Grid>

            <Grid item xs={5}>
              <TextField onChange={handleOwnerPhone2} label="Phone (secondary)" defaultValue={details[0].owner_phone_two} />
            </Grid>

            <Grid item xs={1} >
              <h4>Schedule:</h4>
            </Grid>

            <Grid item xs={5}>
              <FormGroup row>
                {/* checked={monday} */}
                <FormControlLabel label="M" control={<Checkbox checked={monday} onChange={handleMonday} />} labelPlacement="top" />
                <FormControlLabel label="T" control={<Checkbox checked={tuesday} onChange={handleTuesday} />} labelPlacement="top" />
                <FormControlLabel label="W" control={<Checkbox checked={wednesday} onChange={handleWednesday} />} labelPlacement="top" />
                <FormControlLabel label="R" control={<Checkbox checked={thursday} onChange={handleThursday} />} labelPlacement="top" />
                <FormControlLabel label="F" control={<Checkbox checked={friday} onChange={handleFriday} />} labelPlacement="top" />
              </FormGroup><br />
            </Grid>

            <Grid item xs={1} >
              <h4>Route:</h4>
            </Grid>

            <Grid item xs={5}>
              {routes.length > 0 &&
                <RadioGroup row defaultValue={0}>
                  {routes.map((route) => (
                    <FormControlLabel key={route.id} value={route.id} control={<Radio onChange={handleDogRoute} checked={dogRoute == route.id} />} label={route.name} />
                  ))}
                </RadioGroup>}
            </Grid>

            <Grid item xs={1} >
              <h4>Pick up:</h4>
            </Grid>

            <Grid item xs={11}>
              <TextField onChange={handlePickup} label="Pick Up Instructions" defaultValue={details[0].pick_up} className="instructions" />
            </Grid>

            <Grid item xs={1} >
              <h4>Drop off:</h4>
            </Grid>

            <Grid item xs={11}>
              <TextField onChange={handleDropoff} label="Drop Off Instructions" defaultValue={details[0].drop_off} className="instructions" />
            </Grid>

            <Grid item xs={4}>
              <Button onClick={goBack} color="secondary">Cancel</Button>
            </Grid>

            <Grid item xs={4}>
              <Button onClick={deleteDog} color="error">Delete</Button>
            </Grid>

            <Grid item xs={4}>
              <Button onClick={sendDog} color="success">Save</Button>
            </Grid>

          </Grid>
          :
          <p>Loading</p>
      }


    </div>
  );
}

export default EditDog;
