import React from 'react';
import { Route, Link } from 'react-router-dom';

import EditFriend from './EditFriend';
import DeleteFriend from './DeleteFriend';

function Friend(props) {
    return (
        <div>
            <h2>Name: {props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>

            {/* <Link to="/edit"><button>Edit</button></Link> */}
            {/* <Route path="/edit" component={<EditFriend />} /> */}




        

            <DeleteFriend removeFriend={props.removeFriend} id={props.friend.id} />
        </div>
    )
}

export default Friend;