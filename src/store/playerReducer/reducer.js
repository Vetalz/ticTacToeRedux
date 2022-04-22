const defaultState = {
  player: 'X',
};

const reducer = (state=defaultState, {type, payload}) => {
  switch (type) {
    case 'SET_PLAYER':
      return {...state, player: state.player = payload};
    default:
      return state;
  }
}

export default reducer;