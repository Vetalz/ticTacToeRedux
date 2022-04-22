import {handleAction} from "redux-actions";
import {setValues} from "./actions";

const defaultState = {
  values: new Array(9).fill(''),
};

const reducer = handleAction(
  setValues,
  (state, {payload}) => ({...state, values: payload}),
  defaultState
)

export default reducer;