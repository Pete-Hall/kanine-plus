import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';


function DogList(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const dogs = useSelector((store) => store.dogs); // reducer to hold the dog data

  useEffect(() => {
    dispatch({ type: 'GET_DOGS' }); // on page load, send a dispatch to get the dog data
  }, [])

  const dogDetails = (e) => { // function to go to the correct details page for the dog. we use this function below in the data grid
    console.log(e);
    history.push(`/details/${e}`)
  }

  const getFullSchedule = (params) => { // creates a schedule for each dog, taking booleans from the database and appending the correct letter for the day that dog wals. we use this function below in the data grid
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

  const columns = [ // creates the columns for the datagrid
    // {
    //   field: 'id',
    //   headerName: 'ID',
    //   minWidth: 0,
    //   flex: 1
    // },
    {
      field: 'Image',
      width: 90,
      renderCell: (params) => { // https://mui.com/x/react-data-grid/column-definition/ 
        // console.log(params);
        return ( // https://stackoverflow.com/questions/70449488/how-to-display-image-in-a-mui-x-data-grid-table
          <>
          <Avatar src={params.row.image} />
          </>
        );
      },
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
      // valueGetter allows us to render each cell based on the getFullSchedule function https://mui.com/x/react-data-grid/column-definition/
      valueGetter: getFullSchedule
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Dog Details',
      width: 150,
      flex: 1,
      // getActions allows us to return the possible actions for that column, in this case it's a button that takes us to the dog details
      getActions: ({ id }) => { // (params) => ...dogDetails(params.id) also works. but with the Avatar column, ({image}) => src={image} does not work, not sure why
        // console.log(id);
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
              // for rows, we're using the data from the dogs reducer (aka all the dog data from the database)
            />
            :
            <p>Any dogs you have will appear here</p>
        }
      </Grid>
    </div>
  );
}

export default DogList;
