import { combineReducers } from "redux";
import { GET_FRIENDS } from "../actions";
import { NEW_FRIEND } from "../actions";

const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case NEW_FRIEND:
      console.log("reducers file action", action.payload.value);
      const newFriends = friends.slice(0);
      newFriends.push(action.payload);
      return newFriends;
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
