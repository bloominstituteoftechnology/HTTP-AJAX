import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FREIND';

export const getFriends = (friendData) => {
    
    const promise = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(promise);
    
    // Add the code for this action
    
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};

export const addFriend = (friendData) => {
    const promise = axios.post('http://localhost:5000/new-friend', friendData);
   
    return {
        type: ADD_FRIEND,
        payload: promise
    };
};
export const removeFriend = (index) => {
    const promise = axios.delete('http://localhost:5000/delete-friend', {
        data: {
            index
        }
    });
    return {
        type: REMOVE_FRIEND,
        payload: promise
    };
};

export const updateFriend = (friendData) => {
    const promise = axios.put('http://localhost:5000/update-friend', friendData);
    return {
        type: UPDATE_FRIEND,
        payload: promise
    };
};
