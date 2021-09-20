import { combineReducers } from 'redux';
import guitars from './guitars';
import user from './user';
import errors from './errors';
import favorites from './favorites';
import reviews from './reviews';

export default combineReducers({
  guitars,
  user,
  errors,
  favorites,
  reviews,
});
