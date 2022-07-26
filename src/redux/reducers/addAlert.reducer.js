const addAlertReducer = (state = false, action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return action.payload;
    default:
      return state;
  }
};

export default addAlertReducer;
