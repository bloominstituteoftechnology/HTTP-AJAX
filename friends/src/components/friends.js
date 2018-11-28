import React from 'react';

function friends(props){


console.log(props.info);
    return (<div>
        {props.info.map(friend => (
            <div key={friend.id} className='friend-container'>
                <div>Name: <span>{friend.name}</span></div>
                <div>Age: <span>{friend.age}</span></div> 
                <div>Email: <span>{friend.email}</span></div>               
            </div>
        ))}
    </div>);
}

export default friends;