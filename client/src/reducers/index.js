import { combineReducers } from 'redux';
import guitars from './guitars';
import user from './user';
import errors from './errors';

export default combineReducers({
  guitars,
  user,
  errors,
});
