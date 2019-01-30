import React from 'react';

function FriendsList (props) {
    console.log(props)
    return(
        <div>
            <h1>Friends of the Friends</h1>
            {props.friends.map( stuff => {
                return <p>{stuff.name}</p>
                               
            })}
        </div>
    )

}

export default FriendsList;