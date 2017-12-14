import { combineReducers } from "redux";
import {
  GET_FRIENDS,
  ADD_FRIEND,
  DELETE_FRIEND,
  UPDATE_FRIEND
} from "../actions/friends";

const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      console.log(action.payload.data);
      return [...friends, action.payload.data];
    case DELETE_FRIEND:
      return friends.filter(friend => action.payload.data.name !== friend.name);
    case UPDATE_FRIEND:
      return action.payload.data;    
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
