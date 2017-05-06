import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ERROR = 'ERROR';

const ROOT_URL = "http://localhost:5000";

export const getFriends = () => {
  const request = axios.get(`${ROOT_URL}/friends`);
  return {
    type: GET_FRIENDS,
    payload: request
  };
};

export const addFriend = (friend, callback) => {
  const request = axios.post(`${ROOT_URL}/new-friend`, friend);
  request.then(() => callback());
  
  return {
    type: ADD_FRIEND,
    payload: request
  }
};