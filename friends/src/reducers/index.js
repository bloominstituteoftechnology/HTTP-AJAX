import { GET_FRIENDS, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions';

const initialState = { friends: [] }

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FRIENDS:
    case ADD_FRIEND:
    case UPDATE_FRIEND:
    case DELETE_FRIEND:
      return Object.assign({}, state, { friends: action.payload.data });
    default:
      return state;
  }
}