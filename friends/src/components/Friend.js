import React from 'react'

const Friend = props => {
    const friend = props.friends.find(
          thing => `${thing.id}` === props.match.params.friendId
        );
        console.log(friend)
    return (
        <div>
            <h2>I'm your friend</h2> 
            <button>Update Friend</button>
            <button>Delete Friend</button>
        </div>
        
    )

}

export default Friend