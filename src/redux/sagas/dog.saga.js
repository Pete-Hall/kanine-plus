import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getDogs() {
  try {
    const dogs = yield axios.get('/api/dog');
    console.log('dogs from saga:', dogs.data);
    yield put({type: 'SET_DOGS', payload: dogs.data})
  } catch (err) {
    console.log('Error getting dogs from DB:', err);
    alert('Error getting dogs from DB')
  }
}

function* dogSaga() {
  yield takeLatest('GET_DOGS', getDogs);
}

export default dogSaga;
