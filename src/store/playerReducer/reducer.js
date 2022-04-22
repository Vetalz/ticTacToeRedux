import {handleAction} from "redux-actions";
import {setPlayer} from "./actions";

const defaultState = {
  player: 'X',
};

const reducer = handleAction(
  setPlayer,
  (state, {payload}) => ({...state, player: state.player = payload}),
  defaultState
)

export default reducer;