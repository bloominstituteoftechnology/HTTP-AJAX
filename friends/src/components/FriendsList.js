import React from 'react';
import { NavLink } from 'react-router-dom';


const FriendsList = props => {
    return (
            <div className="container-fluid">
                {props.friends.map(friend => {
                    return  (
                    <div className="container" key={friend.name + friend.age}>
                        <div className="row">
                            <NavLink to={`/friends/${friend.name.toLowerCase()}`} key={friend.name + friend.age} className="col-4"> {friend.name} </NavLink>
                            <div className="col-4"> {friend.email} </div>
                            <div className="col-4"> {friend.age} </div>
                        </div>
                    </div>
                
            )})}
            </div>
    )
}

export default FriendsList