import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND'
// http://localhost:5000/friends

export const getFriends = () => {
    // Add the code for this action
    const promise = axios.get('http://localhost:5000/friends'); 
    return {
        type: GET_FRIENDS,
        payload: promise
    }
};
export const addFriend = (o) => {
    const promise = axios.post('http://localhost:5000/new-friend',o); 
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}