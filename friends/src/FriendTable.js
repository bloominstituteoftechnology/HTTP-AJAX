import React from 'react'
import FriendRow from './FriendRow'

const FriendTable = (props) =>{
   
    return(
        <div>
            {props.friends.map(friend =>{
                return(
                    <FriendRow friend = {friend}/>
                )
            })}
        </div>
        
    )
}

export default FriendTable;