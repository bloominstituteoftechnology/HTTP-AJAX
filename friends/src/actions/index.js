import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ERROR_FRIEND = 'ERROR_FRIEND';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  }
};

export const addFriend = (friend) => {
  if (typeof friend !== 'object')
    return {
      type: ERROR_FRIEND,
      message: `FriendError: Expected an object but received: ${friend}`,
      received: JSON.stringify(friend)
    }
  if (friend.name == false)
    return {
      type: ERROR_FRIEND,
      message: `FriendError: Expected friend to have a name.`,
      received: JSON.stringify(friend)
    }
  if (friend.age == false)
    return {
      type: ERROR_FRIEND,
      message: `FriendError: Expected friend to have an age.`,
      received: JSON.stringify(friend)
    }
  if (friend.email == false)
    return {
      type: ERROR_FRIEND,
      message: `FriendError: Expected friend to have an email.`,
      received: JSON.stringify(friend)
    }
  const promise = axios.post('http://localhost:5000/new-friend', friend);
  return {
    type: ADD_FRIEND,
    payload: promise
  }
};
