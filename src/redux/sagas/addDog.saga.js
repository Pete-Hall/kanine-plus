import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addDog(action) {
  try {
    const response = yield axios.post('/api/add', action.payload);
    console.log('add dog response from saga:', response);
    yield put({type: 'ADD_ALERT', payload: true}); 
  } catch (err) {
    console.log('Error adding dog to DB:', err);
    alert('Error adding dog from DB')
  }
}

function* addDogSaga() {
  yield takeLatest('ADD_DOG', addDog);
}

export default addDogSaga;
