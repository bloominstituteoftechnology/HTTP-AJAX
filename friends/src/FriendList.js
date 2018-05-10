import React from 'react';


const FriendsList = props => {
return (
    <div>{props.friends.map((data) =>{
        return ( <div  key={data.id} className="friends">
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Email: {data.email}</div>
            </div>
        )
    })}</div>
   )
}

export default FriendsList;