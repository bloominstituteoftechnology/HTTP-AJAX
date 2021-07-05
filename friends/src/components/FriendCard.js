import React from 'react'

const FriendCard = (props) =>{
    return(
        <div className="card">         
            <h2>{props.friend.name}</h2>
            <p><span className="fr-sub-hdr">Age: </span><span>{props.friend.age}</span></p>
            <p><span className="fr-sub-hdr">Email: </span><span>{props.friend.email}</span></p>                    
        </div>   
    )
}

export default FriendCard