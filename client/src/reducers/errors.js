import { RESET_ERR, CLEAR_ERRORS, SIGNUP_ERR } from '../actions/types';

const initialState = {
  resetPassword: '',
  signup: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ERR:
      return {
        ...state,
        resetPassword: action.payload,
      };

    case SIGNUP_ERR:
      return {
        ...state,
        signup: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        resetPassword: '',
      };

    default:
      return state;
  }
};

export default reducer;
