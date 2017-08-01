import { combineReducers} from 'redux';
import { GET_FRIENDS } from '../actions';
import { POST_FRIENDS } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        case POST_FRIENDS:
            return friends.concat(action.payload)
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;
