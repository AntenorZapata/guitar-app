import { RESET_ERR, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  resetPassword: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ERR:
      return {
        ...state,
        resetPassword: action.payload,
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
