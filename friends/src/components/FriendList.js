import React from 'react';
import FriendCard from './FriendCard'


 const FriendList = (props) =>{
    return(
        <div>                
            <h1>Muh Frans!</h1>
            {props.friends.map(data =>
            <FriendCard friends = {data} />   
            )}               
        </div>
    )
} 
  
export default FriendList