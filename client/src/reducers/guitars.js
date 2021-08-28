import { CREATE_GUITAR, FETCH_ALL } from '../actions/types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE_GUITAR:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
