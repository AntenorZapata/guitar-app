import {
  CREATE_GUITAR, FETCH_ALL, GET_GUITAR, CLEAR_GUITAR, GET_REVIEWS, GET_REVIEWS_BY_ID,
} from '../actions/types';

const initialState = {
  allGuitars: [],
  guitar: {},
  reviews: [],
  reviewById: {},
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

    case GET_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload],
      };

    case GET_REVIEWS_BY_ID:
      return {
        ...state,
        reviewById: action.payload,
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
