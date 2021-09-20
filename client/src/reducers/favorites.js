import {
  CREATE_FAV, DELETE_FAV, GET_FAV_BY_EMAIL, GET_FAV_BY_ID,
} from '../actions/types';

const initialState = {
  favorites: {},
  allFavorites: [],
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

    default:
      return state;
  }
};

export default reducer;
