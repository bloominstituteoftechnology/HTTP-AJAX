import React from 'react';

export default function FriendsList(props) {
  if (props.loading) {
    return <h2>Loading data..</h2>;
  } else if (!props.loading && props.friends.length === 0) {
    return <h2>No data here, try again</h2>
  }

  return (
    <div>
      {props.friends.map((friend, i) => (
        <div key={i}>
          <p>{friend.name}</p>
        </div>
      ))}
    </div>
  )
}