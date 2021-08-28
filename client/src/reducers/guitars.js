import { CREATE_GUITAR, FETCH_ALL } from '../actions/types';

const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        cards: action.payload,
      };

    case CREATE_GUITAR:
      return state;

    default:
      return state;
  }
};

export default reducer;
