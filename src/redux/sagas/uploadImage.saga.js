import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* uploadImage(action) {
  try {
    const response = yield axios.post('/api/uploadImage', action.payload);
    console.log('add dog response from saga:', response.data);
    yield put({type: 'SET_IMAGE', payload: response.data}); 
  } catch (err) {
    console.log('Error adding dog to DB:', err);
    alert('Error adding dog from DB')
  }
}

function* uploadImageSaga() {
  yield takeLatest('SEND_IMAGE', uploadImage);
}

export default uploadImageSaga;
