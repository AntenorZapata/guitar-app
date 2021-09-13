import {
  CREATE_GUITAR, FETCH_ALL, GET_GUITAR, CLEAR_GUITAR,
} from '../actions/types';

const initialState = {
  allGuitars: [],
  guitar: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        allGuitars: [...action.payload],
      };

    case CREATE_GUITAR:
      return [...state, action.payload];

    case GET_GUITAR:
      return {
        ...state,
        guitar: action.payload,
      };

    case CLEAR_GUITAR:
      return {
        ...state,
        guitar: {},
      };

    default:
      return state;
  }
};

export default reducer;
