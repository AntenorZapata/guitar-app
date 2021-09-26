import {
  CREATE_GUITAR, FETCH_ALL, GET_GUITAR, CLEAR_GUITAR, GET_FILTERED_GUITARS,
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
      return {
        ...state,
        allGuitars: [...state.allGuitars, action.payload],
      };

    case GET_GUITAR:
      return {
        ...state,
        guitar: action.payload,
      };

    case CLEAR_GUITAR:
      return {
        ...state,
        guitar: {},
        reviewById: [],
      };

    case GET_FILTERED_GUITARS:
      return {
        ...state,
        allGuitars: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
