import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

// Hint: The URL you want to be fetching from is http://localhost:5000/friends.
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
      type: GET_FRIENDS,
      payload: promise
  };
};

export const POST_FRIEND = 'POST_FRIEND';

export const postFriend = (input) => {
  const promise = axios.post('http://localhost:5000/new-friend', input);
  return {
    type: POST_FRIEND,
    payload: promise
  }
}