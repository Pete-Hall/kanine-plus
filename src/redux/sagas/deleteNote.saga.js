import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteNote(action) {
  try {
    console.log('action payload in delete note:', action.payload.specificNoteID);
    const response = yield axios.delete(`/api/deleteNote/${action.payload.specificNoteID}`);
    console.log('delete note response from saga:', response);
    yield put({type: 'GET_NOTES', payload: action.payload.id});
  } catch (err) {
    console.log('Error deleting note from DB:', err);
    alert('Error deleting note from DB')
  }
}

function* deleteNoteSaga() {
  yield takeLatest('DELETE_NOTE', deleteNote);
}

export default deleteNoteSaga;
