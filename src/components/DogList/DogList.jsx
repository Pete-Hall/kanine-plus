import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function DogList(props) {

const dispatch = useDispatch();
const dogs = useSelector((store) => store.dogs);

useEffect(() => {
  dispatch({type: 'GET_DOGS'});
}, [])

  return (
    <div className='container'>
      <h2>Dog List</h2>
      <ul>
        {
          dogs.length > 0 ?
          dogs.map(dog => (
            <li key={dog.id}>{dog.dog_name}, {dog.monday.toString()} ,{dog.driving_routeID}</li>
            // <p>{JSON.stringify(dog)}</p>
          ))
          :
          <p>Loading...</p>
        }
      </ul>

      
    </div>
  );
}

export default DogList;
