import { GET_FRIENDS, ERROR } from '../actions';

export default (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case ERROR:
      return [];
    default:
      return friends;
  }
};