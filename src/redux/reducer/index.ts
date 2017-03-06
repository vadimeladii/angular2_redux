import {combineReducers} from "redux";
import counter from "./counter-reducer";
import userListReducer from "./user-list-reducer";

export const rootReducer = combineReducers({
  counter,
  userListReducer
});
