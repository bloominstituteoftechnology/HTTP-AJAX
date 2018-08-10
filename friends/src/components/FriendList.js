import React from 'react';
import FriendCard from './FriendCard'
import {Link} from 'react-router-dom'


 const FriendList = (props) =>{
    return(
        <div className="list">                
            <h1>Muh Frans!</h1>
            <div className="cards">
               {props.friends.map(data => (               
                    <Link to = {`/${data.id}`}>
                        <div className="list-card">
                            <FriendCard key = {data.id} friend = {data} />
                        </div>
                        
                    </Link>                
                ))} 
            </div>            
                                    
        </div>
    )
} 
  
export default FriendList