import {
  CREATE_GUITAR, FETCH_ALL, GET_GUITAR, CLEAR_GUITAR, UPDATE_GUITAR,
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

    case UPDATE_GUITAR:
      // eslint-disable-next-line no-case-declarations
      const guitar = state.allGuitars.find((gt) => gt._id === action.payload._id);

      return {
        ...state,
        allGuitars: [guitar],
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
      };

    default:
      return state;
  }
};

export default reducer;
