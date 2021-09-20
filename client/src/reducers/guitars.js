import {
  CREATE_GUITAR, FETCH_ALL, GET_GUITAR, CLEAR_GUITAR, GET_REVIEWS, GET_REVIEWS_BY_ID,
  CREATE_FAV, DELETE_FAV, GET_FAV_BY_EMAIL, GET_FAV_BY_ID,
} from '../actions/types';

const initialState = {
  allGuitars: [],
  guitar: {},
  reviews: [],
  reviewById: [],
  favorites: {},
  allFavorites: [],

};

// Refactor - criar um reducer pros favoritos e reviews

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

    case CREATE_FAV:
      return {
        ...state,
        favorites: action.payload,
      };

    case DELETE_FAV:
      return {
        ...state,
        favorites: {},
      };

    case GET_FAV_BY_EMAIL:
      return {
        ...state,
        allFavorites: [...action.payload.all],
        favorites: action.payload.new,
      };

    case GET_FAV_BY_ID:
      return {
        ...state,
        favorites: action.payload,
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

    default:
      return state;
  }
};

export default reducer;
