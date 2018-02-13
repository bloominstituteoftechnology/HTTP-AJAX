import React from 'react';

function Friend(props) {
    return(
      <ul style={{listStyleType: 'none', padding: '20px'}}>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
      </ul>
    )
}

export default Friend;