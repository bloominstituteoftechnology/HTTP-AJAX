import React from 'react'
import FriendRow from './FriendRow'
import styles from '../CSS/FriendTable.css';

class FriendTable extends React.Component{
   constructor(){
       super()
       this.state = {}
   }
  

   render(){
        return(
           
            <div className = 'friend-table-container'>
                <div className = 'friend-list-header'>
                    List of Friends
                </div>
                <div className = 'title-row'>
                    <div className = 'friend-table-title'>Name</div>
                    <div className = 'friend-table-title'>Age</div>
                    <div className = 'friend-table-title'>Email</div>
                </div>
                
                {this.props.friends.map(friend =>{
                    return(
                        <div className = 'friend-row'>
                            <FriendRow friend = {friend} deleteFriend = {this.props.deleteFriend}/>
                        </div>
                    )
                    
                })}
            </div>
            
        )
    }    
}

export default FriendTable;