import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getRoutes(action) {
  try {
    const routes = yield axios.get('/api/route');
    console.log('routes from saga:', routes.data);
    yield put({type: 'SET_ROUTES', payload: routes.data})
  } catch (err) {
    console.log('Error getting routes from DB:', err);
    alert('Error getting routes from DB')
  }
}

function* routeSaga() {
  yield takeLatest('GET_ROUTES', getRoutes);
}

export default routeSaga;
