const originReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ORIGINS':
      return action.payload;
    default:
      return state;
  }
};

export default originReducer;
