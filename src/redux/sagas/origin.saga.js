import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getOrigins(action) {
  try {
    const origins = yield axios.get('/api/origin');
    console.log('origins from saga:', origins.data);
    yield put({type: 'SET_ORIGINS', payload: origins.data})
  } catch (err) {
    console.log('Error getting origins from DB:', err);
    alert('Error getting origins from DB')
  }
}

function* originSaga() {
  yield takeLatest('GET_ORIGINS', getOrigins);
}

export default originSaga;
