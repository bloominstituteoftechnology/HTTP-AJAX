import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND } from '../actions';

const standerize = (props) => {
    if (props.pets === undefined || props.pets.length === 0) {
        console.log('standardizing')
        let pet = {species:'', name:''};
        props.pets = [pet,pet]
    }
    return props
}
const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return standerize(action.payload.data);
    case ADD_FRIEND:
      console.log('add friend action', action);
      return friends
    default:
      return friends;
  }
};


const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
