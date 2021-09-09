import {
  LOGIN, FORGOT_PASS, SIGNUP, RESET,
} from '../actions/types';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;

    case FORGOT_PASS:
      return action.payload;

    case SIGNUP:
      return action.payload;

    case RESET:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
