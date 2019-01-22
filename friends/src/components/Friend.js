import React from 'react';

const Friend = props => {
    console.log(props);
    return(
        <div className="friend-card">
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;