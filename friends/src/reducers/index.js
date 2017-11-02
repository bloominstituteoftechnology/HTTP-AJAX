import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND, DELETE_FRIEND } from '../actions';

const standerize = props => {
  props.forEach(friend => {
    if (friend.pets === undefined || friend.pets.length === 0) {
      console.log('standardizing:', friend);
      let pet = { species: '', name: '' };
      friend.pets = [pet, pet];
    }
  });
  return props;
};
const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
    case ADD_FRIEND:
    case DELETE_FRIEND:
      return standerize(action.payload.data);
    //console.log('add friend action', action);
    // return friends
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
