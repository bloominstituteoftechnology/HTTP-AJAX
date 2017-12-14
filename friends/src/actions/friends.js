import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const getFriends = () => {
  // Add the code for this action
  const apiUrl = "http://localhost:5000/friends";
  const friendsRequest = axios.get(apiUrl);

  //redux-promise middleware takes care of resolving the promise
  return {
    type: GET_FRIENDS,
    payload: friendsRequest
  };
};

export const addFriend = friend => {
  const apiUrl = "http://localhost:5000/new-friend";
  const newFriend = axios.post(apiUrl, friend);
  return {
    type: ADD_FRIEND,
    payload: newFriend
  };
};

export const deleteFriend = (index, friendUpdated) => {
  const apiUrl = "http://localhost:5000/delete-friend";
  const deleteFriend = axios.delete(apiUrl, {
    data: { index: index }
  });
  return {
    type: DELETE_FRIEND,
    payload: deleteFriend
  };
};

export const updateFriend = (friend, index) => {
  const apiUrl = "http://localhost:5000/update-friend";
  console.log('index', index);
  const updateFriend = axios.put(apiUrl, {
    update: friend,
    index: index
  });
  return {
    type: UPDATE_FRIEND,
    payload: updateFriend
  };
};
