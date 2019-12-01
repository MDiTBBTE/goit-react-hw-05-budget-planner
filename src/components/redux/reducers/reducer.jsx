import { combineReducers } from "redux";
import { Type } from "../actions/actions";

const budget = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

const expenses = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE:
      return [...state, action.payload];

    case Type.REMOVE_EXPENSE:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  budget,
  expenses
});
