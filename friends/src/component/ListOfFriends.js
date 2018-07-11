import React from 'react';
import { Link } from 'react-router-dom';

const ListOfFriends = props => {
    return (
        <div> 
            { props.friends.map((friend, index) => {
                return [
                    <div key={index}>
                        <h3>{ friend.name } </h3>
                        <div>{ friend.age } </div>
                        <div>{ friend.email }</div>
                        <Link className="Edit__Link"to="/edit"> <button>Edit Friend</button> </Link>
                        <button onClick={ () => { props.deleteFriend(friend.id) } }>Delete Friend</button>
                    </div>
                ]
            })}
        </div>
    )
}

export default ListOfFriends;