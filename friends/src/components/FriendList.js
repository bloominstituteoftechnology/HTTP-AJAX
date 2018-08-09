import React from 'react';
import FriendCard from './FriendCard'
import {Link} from 'react-router-dom'


 const FriendList = (props) =>{
    return(
        <div>                
            <h1>Muh Frans!</h1>            
            {props.friends.map(data => (               
                <Link to = {`/${data.id}`}><FriendCard key = {data.id} friend = {data} /></Link>                
            ))}                        
        </div>
    )
} 
  
export default FriendList