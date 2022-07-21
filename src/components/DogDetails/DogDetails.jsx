import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, Checkbox, FormControlLabel, FormGroup, TextField, Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DogDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector((store) => store.details);

  const [newNoteMode, setNewNoteMode] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);

  let { id } = useParams();


  useEffect(() => {
    console.log('useParams id:', id);
    dispatch({ type: 'GET_DETAILS', payload: id });
    dispatch({type: 'GET_NOTES', payload: id})
  }, [])

  useEffect(() => {
    console.log('details in DogDetails:', details);
  }, [details])

  const addNote = () => {
    setNewNoteMode(!newNoteMode);
    setButtonShow(!buttonShow);
  }

  const goBack = () => {
    history.push('/list');
  }

  const goToEdit = () => {
    history.push(`/edit/${id}`)
  }

  const saveNote = () => {
    setButtonShow(!buttonShow);
    setNewNoteMode(!newNoteMode);
  }

  return (
    <div className='container'>
      <h2>Dog Details</h2>
      {details.length > 0 ?
        <div>
          <Grid container justifyContent="center">

            <Grid item xs={12}>
              <p>Dog Name: {details[0].dog_name}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Age: {details[0].age}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Breed: {details[0].breed}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Address: {details[0].address}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Origin: {details[0].type}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Owner Name: {details[0].owner_name}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Owner Phone 1: {details[0].owner_phone_one}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Owner Email: {details[0].owner_email}</p>
            </Grid>

            <Grid item xs={6}>
              {details[0].owner_phone_two > 0 ?
                <p>Owner Phone 2: {details[0].owner_phone_two}</p>
                :
                <p>Owner Phone 2: N/A</p>
              }
            </Grid>

            <Grid item xs={6}>
              Schedule: <FormGroup row>
                {/* checked={monday} */}
                <FormControlLabel label="M" control={<Checkbox checked={details[0].monday} />} labelPlacement="top" />
                <FormControlLabel label="T" control={<Checkbox checked={details[0].tuesday} />} labelPlacement="top" />
                <FormControlLabel label="W" control={<Checkbox checked={details[0].wednesday} />} labelPlacement="top" />
                <FormControlLabel label="R" control={<Checkbox checked={details[0].thursday} />} labelPlacement="top" />
                <FormControlLabel label="F" control={<Checkbox checked={details[0].friday} />} labelPlacement="top" />
              </FormGroup>
            </Grid>

            <Grid item xs={6}>
              <p>Route: {details[0].name}</p>
            </Grid>

            <Grid item xs={12}>
              <p>Pick Up: {details[0].pick_up}</p>
            </Grid>

            <Grid item xs={12}>
              <p>Drop Off: {details[0].drop_off}</p>
            </Grid>

            {/* <Grid item xs={12}>
          <p>User</p>
          <TextField multiline rows={3} fullWidth/>
        </Grid> */}

            <Grid item xs={12}>
              {
                newNoteMode ?
                  (<div><TextField label="New Note" fullWidth /> 
                  </div>)
                  // make this a card with a text field in it to match the card layout of displayed notes?
                  :
                  (<p></p>)
              }
            </Grid>

            <Grid item xs={8}>
              {/* conditional rendering, map through the notes */}
              <Box>
                <Card variant="outlined">
                  <CardHeader title="User:" />
                  <CardContent>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
                  </CardContent>
                  <CardActions>
                    <Button>Delete Icon</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>

          </Grid>

          <Grid container>



            {
              buttonShow ?
                <Grid container>
                  <Grid item xs={4}>
                    <Button onClick={goBack}>Back</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={addNote}>Add Note</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={goToEdit}>Edit</Button>
                  </Grid>

                </Grid>
                :
                <Grid container>

                  <Grid item xs={4}>
                    <Button onClick={addNote}>Cancel</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={saveNote}>Save Note</Button>
                  </Grid>

                </Grid>
            }
            {/* 
        <Grid item xs={4}>
          <Button onClick={addNote}>Add Note</Button>
        </Grid>

        <Grid item xs={4}>
          <Button onClick={goToEdit}>Edit</Button>
        </Grid> */}


          </Grid>
        </div>
        :
        <p>Loading...</p>
      }
    </div>
  );
}

export default DogDetails;
