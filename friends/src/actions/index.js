import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
  const promise = axios.get("http://localhost:5000/friends");
  return {
    type: GET_FRIENDS,
    payload: promise
  }
}

export const addFriend = (data) => {
  const promise = axios.post("http://localhost:5000/new-friend", data);
  return {
    type: ADD_FRIEND,
    payload: promise
  }
}

export const updateFriend = (data) => {
  const promise = axios.put("http://localhost:5000/update-friend", data);
  return {
    type: UPDATE_FRIEND,
    payload: promise
  }
}

export const deleteFriend = (data) => {
  const promise = axios.delete("http://localhost:5000/delete-friend", { data: data });
  return {
    type: DELETE_FRIEND,
    payload: promise
  }
}