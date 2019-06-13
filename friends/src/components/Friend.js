import React from 'react'

const Friend = props => {
    const friend = props.friends.find(
          thing => `${thing.id}` === props.match.params.friendId
        );
        console.log(friend)
    return (
        <div
        
        >
            <h2>I'm your friend</h2> 
            <button
            onClick={event => {
                {props.updateItem(event, friend)};
                {props.history.push('/update-form')};
              }}
              >Update Friend</button>
            <button
            onClick={event => {
                {props.deleteItem(event, friend.id)};
                {props.history.push('/')};
              }}
            >Delete Friend</button>
        </div>
        
    )

}

export default Friend