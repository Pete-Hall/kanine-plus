import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function AddDog(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  return (
    <div className='container'>
      <h2>Add Dog</h2>
    </div>
  );
}

export default AddDog;
