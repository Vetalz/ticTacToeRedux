import {combineReducers, createStore} from "redux";
import playerReducer from "./playerReducer/reducer";
import fieldReducer from "./fieldReducer/reducer";

const rootReducer = combineReducers({
  playerReducer,
  fieldReducer,
})

export const store = createStore(rootReducer);