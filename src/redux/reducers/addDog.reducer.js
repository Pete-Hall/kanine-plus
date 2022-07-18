const addDogReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_DOG':
      return action.payload;
    default:
      return state;
  }
};

export default addDogReducer;
