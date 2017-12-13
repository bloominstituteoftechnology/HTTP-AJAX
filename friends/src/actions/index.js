import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    let payload = {
        
    };
    const apiUrl = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(apiUrl);
    
    // Add the code for this action
    
    return {
        type: GET_FRIENDS,
        payload: friendsRequest
    };
};