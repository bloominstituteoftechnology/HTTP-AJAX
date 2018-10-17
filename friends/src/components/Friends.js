import React from 'react';

const Friends = props => {
    return <div>
        <p>
            {props.friend.name} | {props.friend.age} | {props.friend.email}
        </p>
      </div>;
}
 
export default Friends;