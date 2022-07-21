import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getNotes(action) {
  try {
    const notes = yield axios.get(`/api/notes/${action.payload}`);
    console.log('notes from saga:', notes.data);
    yield put({type: 'SET_NOTES', payload: notes.data})
  } catch (err) {
    console.log('Error getting notes from DB:', err);
    alert('Error getting notes from DB')
  }
}

function* notesSaga() {
  yield takeLatest('GET_NOTES', getNotes);
}

export default notesSaga;
