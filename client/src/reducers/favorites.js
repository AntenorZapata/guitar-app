import {
  CREATE_FAV, DELETE_FAV, GET_FAV_BY_EMAIL, GET_FAV_BY_ID, GET_FAVORITES_PAGE, CLEAR_FAVORITES,
} from '../actions/types';

const initialState = {
  favorites: {},
  allFavorites: [],
  favoritesPage: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FAV:
      return {
        ...state,
        allFavorites: [...action.payload.all],
        favorites: action.payload.new,
      };

    case DELETE_FAV:
      return {
        ...state,
        favorites: {},
      };

    case GET_FAV_BY_EMAIL:
      return {
        ...state,
        allFavorites: [...action.payload],
      };

    case GET_FAV_BY_ID:
      return {
        ...state,
        favorites: action.payload,
      };

    case GET_FAVORITES_PAGE:
      return {
        ...state,
        favoritesPage: [...state.favoritesPage, action.payload],
      };

    case CLEAR_FAVORITES:
      return {
        ...state,
        allFavorites: [],
      };

    default:
      return state;
  }
};

export default reducer;
