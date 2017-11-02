import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND'
// http://localhost:5000/friends

export const getFriends = () => {
    // Add the code for this action
    const promise = axios.get('http://localhost:5000/friends'); 
    /*
    console.log('action promise:', promise)
    promise.then(function (response) {
        console.log('promise response:',response);
      })
      .catch(function (error) {
        console.log('promise error:',error);
    });
    */
    return {
        type: GET_FRIENDS,
        payload: promise
    }
};
export const addFriend = (friend) => {
   // console.log('friend:', friend)
    const promise = axios.post('http://localhost:5000/new-friend',friend); 
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}