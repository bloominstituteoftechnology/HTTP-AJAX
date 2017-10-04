import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND, ERROR_FRIEND } from '../actions';

const friendsReducer = (friends = [], action) => {
  switch(action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      return action.payload.data;
    case ERROR_FRIEND:
      try{
        throw new Error(action.message);
      } catch (error) {
        console.error(error.message)
        console.error(`Received: ${action.received}`);
        return friends;
      }
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
