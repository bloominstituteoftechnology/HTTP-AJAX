import React from 'react'

const FriendCard = (props) =>{
    return(
        <div>         
            <h2>{props.friends.name}</h2>
            <p><span className="fr-sub-hdr">Age: </span><span>{props.friends.age}</span></p>
            <p><span className="fr-sub-hdr">Email: </span><span>{props.friends.email}</span></p>                    
        </div>   
    )
}

export default FriendCard