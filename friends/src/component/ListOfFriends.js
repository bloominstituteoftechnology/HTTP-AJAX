import React from 'react';

const ListOfFriends = props => {
    return (
        <div> 
            { props.friends.map((friend, index) => {
                return [
                    <div key={index}>
                        <h3>{ friend.name} </h3>
                        <div>{ friend.age} </div>
                        <div>{ friend.email }</div>
                        <button onClick={ () => { props.deleteFriend(friend.id) } }>Delete Friend</button>
                    </div>
                ]
            })}
        </div>
    )
}

export default ListOfFriends;