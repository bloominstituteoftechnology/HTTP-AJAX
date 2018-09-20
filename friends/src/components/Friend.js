import React, {Fragment} from 'react';


const Friend = props => {
    
    return (
        <Fragment>
            <h1>{props.friend.name}</h1>
            <p>Age : {props.friend.age}</p>
            <p>Contact : {props.friend.email}</p>
        </Fragment>
    )
}

export default Friend;