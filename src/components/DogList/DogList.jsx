import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';


function DogList(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const dogs = useSelector((store) => store.dogs);

  useEffect(() => {
    dispatch({ type: 'GET_DOGS' });
  }, [])

  const dogDetails = (e) => {
    console.log(e);
    history.push(`/details/${e}`)
  }

  const getFullSchedule = (params) => {
    let schedule = [];
    if (params.row.monday) {
      schedule = [...schedule, 'M']
    }
    if (params.row.tuesday) {
      schedule = [...schedule, 'T']
    }
    if (params.row.wednesday) {
      schedule = [...schedule, 'W']
    }
    if (params.row.thursday) {
      schedule = [...schedule, 'R']
    }
    if (params.row.friday) {
      schedule = [...schedule, 'F']
    }
    return schedule;
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      minWidth: 0,
      flex: 1
    },
    {
      field: 'dog_name',
      headerName: 'Dog Name',
      width: 90,
      flex: 1
    },
    {
      field: 'name',
      headerName: 'Route',
      width: 110,
      flex: 1
    },
    {
      field: 'schedule',
      headerName: 'Schedule',
      width: 90,
      flex: 1,
      valueGetter: getFullSchedule
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Dog Details',
      width: 150,
      flex: 1,
      getActions: ({ id }) => {
        return [
          <Button onClick={() => dogDetails(id)}>Dog Details</Button> // https://mui.com/x/react-data-grid/editing/#full-featured-crud-component
        ]
      }
    },
  ]

  return (
    <div className='container'>
      <Grid container>
        {
          dogs.length > 0 ?
            <DataGrid
              autoHeight
              columns={columns}
              rows={dogs}
            />
            :
            <p>Loading...</p>
        }
      </Grid>
    </div>
  );
}

export default DogList;
