import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import origins from './origin.reducer';
import routes from './route.reducer';
import dogs from './dog.reducer';
import details from './details.reducer';
import notes from './notes.reducer';
import addAlert from './addAlert.reducer';
import image from './image.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in // TYPE: 'SET_USER' and 'UNSET_USER'
  origins, // TYPE: 'SET_ORIGINS'
  routes, // TYPE: 'SET_ORIGINS'
  dogs, // TYPE: 'SET_DOGS'
  details, // TYPE: 'SET_DETAILS'
  notes, // TYPE: 'SET_NOTES'
  addAlert, // TYPE: 'ADD_ALERT'
  image, // TYPE: 'SET_IMAGE'
});

export default rootReducer;
