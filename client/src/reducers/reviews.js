import {
  GET_REVIEWS, GET_REVIEWS_BY_ID, CLEAR_REVIEWS,
} from '../actions/types';

const initialState = {
  reviews: [],
  reviewById: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    case CLEAR_REVIEWS:
      return {
        ...state,
        reviewById: [],
      };
    default:
      return state;
  }
};

export default reducer;
