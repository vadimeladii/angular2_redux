import {COUNTER_INCREMENT, COUNTER_DECREMENT} from "../actions/counter-actions";
import {Action} from "redux";

let counter = (state = 0, action: Action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
