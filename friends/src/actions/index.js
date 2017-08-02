import axios from 'axios';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  };
};

export const addFriend = (newFriend) => {
  const promise = axios.post('http://localhost:5000/new-friend', newFriend);
  return {
    type: ADD_FRIEND,
    payload: promise
  };
};

export const GET_FRIENDS = 'GET_FRIENDS';

export const ADD_FRIEND = 'ADD_FRIEND';
