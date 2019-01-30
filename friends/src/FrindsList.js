import React from 'react';

function FriendsList (props) {
    console.log(props)
    return(
        <div>
            <h1>Friends of the Friends</h1>
            <hr></hr>
            {props.friends.map( stuff => {
                return (
                    <div>
                        <h1>{stuff.name}</h1>
                        <p>{stuff.age}</p>
                        <p>{stuff.email}</p>
                        <hr></hr>
                    </div>
                )               
            })}
        </div>
    )

}

export default FriendsList;