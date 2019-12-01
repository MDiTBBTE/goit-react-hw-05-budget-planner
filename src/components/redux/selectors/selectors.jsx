import { createSelector } from "reselect";

export const getBudget = state => state.store.budget;
export const getExpenses = state => state.store.expenses;

export const calculateTotalExpenses = createSelector(getExpenses, expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0)
);
export const calculateBalance = createSelector(
  [getBudget, calculateTotalExpenses],
  (budget, expenses) => budget - expenses
);
