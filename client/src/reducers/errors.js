import {
  FORGOT_ERR, CLEAR_ERRORS, SIGNUP_ERR, RESET_ERR,
} from '../actions/types';

const initialState = {
  forgotPassword: '',
  signup: '',
  resetPassword: '',
  email: { valid: true, text: '' },
  password: { valid: true, text: '' },
  name: { valid: true, text: '' },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_ERR:
      return {
        ...state,
        forgotPassword: action.payload,
      };

    case SIGNUP_ERR:
      return {
        ...state,
        signup: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        forgotPassword: '',
        signup: '',
        resetPassword: '',
      };
    case RESET_ERR:
      return {
        ...state,
        resetPassword: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
