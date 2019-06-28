import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = (props) => {
        return (
            <div className="friends">
            {props.data.map( friend => {
                return (
                    <Link 
                        className="updatefriend" 
                        to={`/updatefriend/${friend.id}`}
                    >
                        <h1>{friend.name}</h1>
                    </Link>
                )
            })}
            <Link className="mainadd" to="/addfriend">Add a friend!</Link>
            </div>
    )
}

export default FriendList;