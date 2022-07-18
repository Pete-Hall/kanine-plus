import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { DataGrid} from '@mui/x-data-grid';


function DogList(props) {

const dispatch = useDispatch();
const dogs = useSelector((store) => store.dogs);

const [gridData, setGridData] = useState([]);

useEffect(() => {
  dispatch({type: 'GET_DOGS'});
}, [])

useEffect(()=> {
  setGridData(dogs);
}, [dogs]);

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90
  },
  {
    field: 'dog_name',
    headerName: 'Dog Name',
    width: 90
  },
  {
    field: 'monday',
    headerName: 'Monday',
    width: 90
  },
  {
    field: 'driving_route',
    headerName: 'Route',
    width: 90
  },
  {
    field: 'dog_details',
    headerName: 'Dog Details',
    width: 90
  },
]

  return (
    <div className='container'>
      <h2>Dog List</h2>
      <ul style={{ height: 250, width: '75%' }}>
        {
          dogs.length > 0 ?
          // dogs.map(dog => (
          //   <li key={dog.id}>{dog.dog_name}, {dog.monday.toString()} ,{dog.driving_routeID}</li>
          //   // <p>{JSON.stringify(dog)}</p>
            
          // ))
          <DataGrid
        columns={columns}
        // rows={[{id: 1, name: 'test'}]}
        rows={gridData}
        // getRowId={(dog) => dog.Id}
        />
          :
          <p>Loading...</p>
        }
      </ul>
      
      
    </div>
  );
}

export default DogList;
