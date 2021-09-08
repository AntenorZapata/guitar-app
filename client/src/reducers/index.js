import { combineReducers } from 'redux';
import guitars from './guitars';
import user from './user';

export default combineReducers({
  guitars,
  user,
});
