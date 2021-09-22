import {
  GET_REVIEWS, GET_REVIEWS_BY_ID, CLEAR_REVIEWS, GET_REV_BY_EMAIL,
} from '../actions/types';

const initialState = {
  reviews: [],
  reviewById: [],
  reviewsByUser: [],
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

    case GET_REV_BY_EMAIL:
      return {
        ...state,
        reviewsByUser: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
