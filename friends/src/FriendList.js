import React from 'react';


const FriendsList = props => {
return (
    <div>{props.friends.map((data) =>{
        return ( <div  key={data.id} className="friends">
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Email: {data.email}</div>
            <button type="delete" onClick={() =>props.update(data.id)}>Update</button>
            <button type="delete" onClick={() =>props.delete(data.id)}>Delete</button>
            </div>
        )
    })}</div>
   )
}

export default FriendsList;