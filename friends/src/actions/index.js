import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const NEW_FRIEND = "NEW_FRIEND";

export const getFriends = () => {
  const apiUrl = "http://localhost:5000/friends";
  const friendsRequest = axios.get(apiUrl);

  // redux-promise middleware takes care of resolving the promise
  return {
    type: GET_FRIENDS,
    payload: friendsRequest
  };
};

export const addFriend = friend => {
  return {
    type: NEW_FRIEND,
    payload: friend
  };
};
