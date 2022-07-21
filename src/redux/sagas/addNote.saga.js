import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addNote(action) {
  try {
    console.log(action.payload);
    const response = yield axios.post('/api/addNote', action.payload);
    console.log('add note response from saga:', response);
    yield put({type: 'GET_NOTES', payload: response.data})
  } catch (err) {
    console.log('Error adding dog to DB:', err);
    alert('Error adding dog from DB')
  }
}

function* addNoteSaga() {
  yield takeLatest('ADD_NOTE', addNote);
}

export default addNoteSaga;
