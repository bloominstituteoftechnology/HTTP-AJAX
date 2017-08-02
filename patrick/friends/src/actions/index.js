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






// import axios from 'axios';
//
// export const GET_FRIENDS = 'GET_FRIENDS';
// export const POST_FRIENDS = 'POST_FRIENDS';
//
// export const getFriends = () => {
//   const promise = axios.get('http://localhost:5000/friends');
//   return {
//     type: GET_FRIENDS,
//     payload: promise
//   };
// }
//
// export const postFriend = (friendData) => {
//   const promise = axios.post('http://localhost:5000/new-friend', {
//     name: friendData.name,
//     age: friendData.age,
//     email: friendData.email
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//   });
//   return {
//     type: POST_FRIENDS,
//     payload: promise
//   }
// };
