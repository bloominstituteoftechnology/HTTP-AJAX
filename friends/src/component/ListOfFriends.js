import React from 'react';

const ListOfFriends = props => {
    console.log(props);
    return (
        <div> 
            <div> {props.friend.map(f => <div key ={f.id} className='friends'> 
            <h1>{f.name}</h1>
            <h1>{f.age}</h1>
            <h1>{f.email}</h1>
        </div>
        )}
        </div>
    </div>
    )
}

export default ListOfFriends;