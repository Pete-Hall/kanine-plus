import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, Checkbox, FormControlLabel, FormGroup, TextField, Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DogDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector((store) => store.details);
  const notes = useSelector((store) => store.notes);

  const [newNoteMode, setNewNoteMode] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [newNote, setNewNote] = useState('');

  let { id } = useParams();

  useEffect(() => {
    console.log('useParams id:', id);
    dispatch({ type: 'GET_DETAILS', payload: id });
    dispatch({ type: 'GET_NOTES', payload: id })
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

  const handleDeleteNote = (specificNoteID) => {
    console.log('in delete note:', specificNoteID)
    let noteInfo = {
      specificNoteID,
      id
    }
    dispatch({ type: 'DELETE_NOTE', payload: noteInfo })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  const saveNote = () => {
    dispatch({ type: 'ADD_NOTE', payload: { newNote, id } });
    // console.log('new note!', newNote);
    setButtonShow(!buttonShow);
    setNewNoteMode(!newNoteMode);
  }

  return (
    <div className='container'>
      {details.length > 0 ?
        <div>
          <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} >

            <Grid item xs={1} >
              Dog Name:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].dog_name}</p>
            </Grid>

            <Grid item xs={1} >
              Dog Gender:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].gender}</p>
            </Grid>

            <Grid item xs={1} >
              Age:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].age}</p>
            </Grid>

            <Grid item xs={1} >
              Breed:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].breed}</p>
            </Grid>

            <Grid item xs={1} >
              Address:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].address}</p>
            </Grid>

            <Grid item xs={1} >
              Origin:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].type}</p>
            </Grid>

            <Grid item xs={1} >
              Owner Name:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].owner_name}</p>
            </Grid>

            <Grid item xs={1} >
              Owner Phone 1:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].owner_phone_one}</p>
            </Grid>

            <Grid item xs={1} >
              Owner Email:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].owner_email}</p>
            </Grid>

            <Grid item xs={1} >
              Owner Phone 2:
            </Grid>

            <Grid item xs={5}>
              {details[0].owner_phone_two.length > 0 ?
                <p>{details[0].owner_phone_two}</p>
                :
                <p>N/A</p>
              }
            </Grid>

            <Grid item xs={1} >
              Schedule:
            </Grid>

            <Grid item xs={5}>
              <FormGroup row>
                {/* checked={monday} */}
                <FormControlLabel label="M" control={<Checkbox checked={details[0].monday} />} labelPlacement="top" />
                <FormControlLabel label="T" control={<Checkbox checked={details[0].tuesday} />} labelPlacement="top" />
                <FormControlLabel label="W" control={<Checkbox checked={details[0].wednesday} />} labelPlacement="top" />
                <FormControlLabel label="R" control={<Checkbox checked={details[0].thursday} />} labelPlacement="top" />
                <FormControlLabel label="F" control={<Checkbox checked={details[0].friday} />} labelPlacement="top" />
              </FormGroup>
            </Grid>

            <Grid item xs={1} >
              Route:
            </Grid>

            <Grid item xs={5}>
              <p>{details[0].name}</p>
            </Grid>

            <Grid item xs={1} >
              Pick up:
            </Grid>

            <Grid item xs={11}>
              <p>{details[0].pick_up}</p>
            </Grid>

            <Grid item xs={1} >
              Drop off:
            </Grid>

            <Grid item xs={11}>
              <p>{details[0].drop_off}</p>
            </Grid>



            {
              buttonShow ?
                <Grid container>
                  <Grid item xs={4}>
                    <Button onClick={goBack} color="secondary">Back</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={addNote} color="success">Add Note</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={goToEdit}>Edit</Button>
                  </Grid>

                </Grid>
                :
                <Grid container>

                  <Grid item xs={4}>
                    <Button onClick={addNote} color="secondary">Cancel</Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button onClick={saveNote} color="success">Save Note</Button>
                  </Grid>

                </Grid>
            }

            <Grid item xs={12}>
              <br />
            </Grid>

            <Grid item xs={12}>
              {
                newNoteMode ?
                  (<div><TextField onChange={handleNoteChange} label="New Note" fullWidth />
                  </div>)
                  // TODO: make this a card with a text field in it to match the card layout of displayed notes?
                  :
                  (<div></div>)
              }
            </Grid>

            <Grid item xs={8}>
              {/* conditional rendering, map through the notes */}
              {notes.length > 0 ?
                <Box>
                  {notes.map((note) => (
                    <Card key={note.id} variant="outlined">
                      <CardHeader title={note.username + ':'} />
                      <CardContent>
                        <p>{note.content}</p>
                      </CardContent>
                      <CardActions>
                        <Button onClick={() => handleDeleteNote(note.id)} color="error">Delete</Button>
                      </CardActions>
                    </Card>
                  ))}
                </Box>
                :
                <div></div>
              }
            </Grid>

            <Grid item xs={12}>
              <br />
            </Grid>

          </Grid>

        </div>
        :
        <p>Loading...</p>
      }

    </div>
  );
}

export default DogDetails;
