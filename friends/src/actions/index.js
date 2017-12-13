import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  const apiUrl = 'http://localhost:5000/friends';
  const friendsRequest = axios.get(apiUrl);

  return {
    type: GET_FRIENDS,
		payload: friendsRequest 
	};
};