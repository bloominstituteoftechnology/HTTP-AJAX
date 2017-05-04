import { combineReducers } from 'redux';
import FriendsReducer from './FriendsReducer';

const rootReducer = combineReducers({
  friends: FriendsReducer
});

export default rootReducer;