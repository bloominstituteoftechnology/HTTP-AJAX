import React from 'react'

const FriendCard = (props) =>{
    return(
        <div>
            {props.friends.map(data =>  
                <div>         
                    <h2>{data.name}</h2>
                    <p><span className="fr-sub-hdr">Age: </span><span>{data.age}</span></p>
                    <p><span className="fr-sub-hdr">Email: </span><span>{data.email}</span></p>                    
                </div>          
            )}
        </div>
    )
}

export default FriendCard