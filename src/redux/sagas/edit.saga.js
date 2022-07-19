import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* updateDog(action) {
  try {
    const response = yield axios.post('/api/edit', action.payload);
    console.log('edit dog response from saga:', response);
    // yield put({type: 'SEND_DOG', payload: routes.data})
  } catch (err) {
    console.log('Error editing dog in DB:', err);
    alert('Error editing dog in DB')
  }
}

function* editDogSaga() {
  yield takeLatest('UPDATE_DOG', updateDog);
}

export default editDogSaga;
