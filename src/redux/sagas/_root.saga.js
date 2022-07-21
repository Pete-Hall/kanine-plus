import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import originSaga from './origin.saga';
import routeSaga from './route.saga';
import addDogSaga from './addDog.saga';
import dogSaga from './dog.saga';
import detailsSaga from './details.saga';
import editDogSaga from './edit.saga';
import notesSaga from './notes.saga';
import addNoteSaga from './addNote.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered // TYPE: 'LOGIN' and 'LOGOUT'
    registrationSaga(), // TYPE: 'REGISTER'
    userSaga(), // TYPE: 'FETCH_USER'
    originSaga(), // TYPE: 'GET_ORIGINS'
    routeSaga(), // TYPE: 'GET_ROUTES'
    addDogSaga(), // TYPE: 'ADD_DOG'
    dogSaga(), // TYPE: 'GET_DOGS'
    detailsSaga(), // TYPE: 'GET_DETAILS'
    editDogSaga(), // TYPE: 'UPDATE_DOG'
    notesSaga(), // TYPE: 'GET_NOTES'
    addNoteSaga(), // TYPE: 'ADD_NOTE'
  ]);
}
