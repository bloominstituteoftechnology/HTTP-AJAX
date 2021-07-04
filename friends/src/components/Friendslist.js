import React from 'react';

import Friend from './friend'

export default props => {
    return (
       <div>
            {props.friends.map((friend, i) => {
                return <Friend id={friend.id} name={friend.name} key={friend.id} />
            })}
       </div>
    )
}
