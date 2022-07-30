import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteDog(action) {
  try {
    const response = yield axios.delete(`/api/deleteDog/${action.payload}`);
    console.log('delete dog response from saga:', response);
    yield put({ type: 'GET_DOGS' })
  } catch (err) {
    console.log('Error deleting dog from DB:', err);
    alert('Error deleting dog from DB')
  }
}

function* deleteDogSaga() {
  yield takeLatest('DELETE_DOG', deleteDog);
}

export default deleteDogSaga;
