// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_BTN = 'DELETE_BTN';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deletButton = (id) => ({
  type: DELETE_BTN,
  payload: id,
});

export const editExpense = (editableExpense, expenseIndex) => ({
  type: EDIT_EXPENSE,
  editableExpense,
  expenseIndex,
});

export const updateExpenses = (expenses) => ({
  type: UPDATE_EXPENSES,
  expenses,
});

export const requestApi = (currency) => ({
  type: REQUEST_API,
  currency,
});
