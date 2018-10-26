import React from 'react'
import FriendRow from './FriendRow'

class FriendTable extends React.Component{
   constructor(){
       super()
       this.state = {}
   }
  

   render(){
        return(
           
            <div>
                
                {this.props.friends.map(friend =>{
                    return(
                        <FriendRow friend = {friend} deleteFriend = {this.props.deleteFriend}/>
                    )
                })}
            </div>
            
        )
    }    
}

export default FriendTable;