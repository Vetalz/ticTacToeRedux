const defaultState = {
  values: new Array(9).fill(''),
};

const reducer = (state=defaultState, {type, payload}) => {
  switch (type) {
    case 'SET_VALUE':
      return {...state, values: payload};
    default:
      return state;
  }
}

export default reducer;