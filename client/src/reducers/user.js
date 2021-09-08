import { LOGIN, FORGOT_PASS } from '../actions/types';

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;

    case FORGOT_PASS:
      return action.payload;

    default:
      return state;
  }
};

export default loginReducer;
