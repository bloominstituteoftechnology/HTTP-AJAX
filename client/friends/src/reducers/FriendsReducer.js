import { GET_FRIENDS } from '../actions';

export default (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    default:
      return friends;
  }
};