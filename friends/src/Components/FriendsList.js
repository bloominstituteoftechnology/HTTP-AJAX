import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = (props) => {
    // if (props.loading){
    //     return (
    //         <h1> Currently Loading </h1>
    //     )
    // }
    return ( 
        <div className="friendList">
            {props.friends.map(friend=> (
                <div className="friend" key={friend.id}>
                    <p> Name: {friend.name} </p>
                    <p> Age: {friend.age} </p>
                    <p> Email: {friend.email} </p>
                    <div className="button-container">
                        <Link to={`/friends/${friend.id}`}><button> Update </button></Link>
                        <button onClick={() => {props.handleDelete(friend.id)}}> Delete </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default FriendsList;