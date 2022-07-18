import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getDetails(action) {
  try {
    const details = yield axios.get(`/api/details/${action.payload}`);
    console.log('details from saga:', details.data);
    yield put({type: 'SET_DETAILS', payload: details.data})
  } catch (err) {
    console.log('Error getting details from DB:', err);
    alert('Error getting details from DB')
  }
}

function* detailsSaga() {
  yield takeLatest('GET_DETAILS', getDetails);
}

export default detailsSaga;
