import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Grid, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DogDetails() {

  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector((store) => store.details);

  let { id } = useParams();

  useEffect(() => {
    console.log('useParams id:', id);
    dispatch({type: 'GET_DETAILS', payload: id});
  }, [])

  useEffect(() => {
    console.log('details in DogDetails:', details);
  }, [details])

  return (
    <div className='container'>
      <h2>Dog Details</h2>
      {details.length > 0 ? 
      <Grid container>

        <Grid item xs={12}>
          <p>Dog Name: {details[0].dog_name}</p>
        </Grid>

        <Grid item xs={6}>
          Age:
        </Grid>

        <Grid item xs={6}>
          Breed:
        </Grid>

        <Grid item xs={6}>
          Address:
        </Grid>

        <Grid item xs={6}>
          Origin:
        </Grid>

        <Grid item xs={6}>
          Owner Name:
        </Grid>

        <Grid item xs={6}>
          Owner Phone 1:
        </Grid>

        <Grid item xs={6}>
          Owner Email:
        </Grid>

        <Grid item xs={6}>
          Owner Phone 2:
        </Grid>

        <Grid item xs={6}>
          Schedule:
        </Grid>

        <Grid item xs={6}>
          Route:
        </Grid>

        <Grid item xs={12}>
          Pick Up:
        </Grid>

        <Grid item xs={12}>
          Drop Off:
        </Grid>

        <Grid item xs={4}>
          <Button>Cancel</Button>
        </Grid>

        <Grid item xs={4}>
          <Button>Add Note</Button>
        </Grid>

        <Grid item xs={4}>
          <Button>Edit</Button>
        </Grid>

      </Grid>
      :
      <p>Loading...</p>
      }   
    </div>
  );
}

export default DogDetails;
