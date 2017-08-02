export const getFriends = (promise) => {
  return {
    type: GET_FRIENDS,
    payload: promise
  };
};

export const GET_FRIENDS = 'GET_FRIENDS';
