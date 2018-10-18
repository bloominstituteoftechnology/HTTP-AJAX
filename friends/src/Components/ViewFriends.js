import React from 'react';

const ViewFriends = (props)=>{
    console.log('viewFriends', props)
    return(
        <div>
            <p>You're now viewing!.. </p>
            <p>{props.data.id}</p>
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
            <p>{props.data.email}</p>
            
        </div>
    )
}


export default ViewFriends


