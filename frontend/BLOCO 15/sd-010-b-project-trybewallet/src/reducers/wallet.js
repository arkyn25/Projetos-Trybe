// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE,
  DELETE_BTN,
  REQUEST_API,
  EDIT_EXPENSE,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  expenseIndex: 0,
  editableExpense: {},
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case EDIT_EXPENSE:
    return {
      ...state,
      editableExpense: action.editableExpense,
      expenseIndex: action.expenseIndex,
      isEditing: true,
    };
  case DELETE_BTN:
    return { ...state,
      expenses: [...state.expenses.filter(({ id }) => id !== action.payload)],
    };
  case REQUEST_API:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
}
