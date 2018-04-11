import React from 'react';

const ListOfFriends = props => {
    console.log(props);
    return (
        <div> 
            <div> {props.friend.map(f => <div key ={f.id} className='friends'> 
            <h1>{f.name}</h1>
            <h2>{f.age}</h2>
            <h2>{f.email}</h2>
        </div>
        )}
        </div>
    </div>
    )
}

export default ListOfFriends;