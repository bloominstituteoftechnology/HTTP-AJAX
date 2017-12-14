import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const GET_FRIENDS = 'GET_FRIENDS';
export const DEL_FRIEND = 'DEL_FRIEND';

const apiUrl = 'http://localhost:5000/friends';
const friendRequest = axios.get(apiUrl);



export const getFriends = () => {
    console.log(friendRequest)
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    };
};

export const addFriend = (friendToBeAdded) => {
    const addFriendPromise = axios.post('http://localhost:5000/new-friend', friendToBeAdded)
    return {
        type: ADD_FRIEND,
        payload: addFriendPromise
    };
};

export const delFriend = (indexOfFriend) => {
    const toDelete = { data: [ indexOfFriend ] };
    const delFriendPromise = axios.delete('http://localhost:5000/delete-friend', toDelete);

    return {
        type: DEL_FRIEND,
        payload: delFriendPromise
    };
}

