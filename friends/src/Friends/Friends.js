import React from 'react'
import './Friends.css'
import axios from 'axios'
class Friends extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.index,
        }
   
    }


deleteFriend(friends){
    axios.delete(`http://localhost:5000/friends/${this.state.id}`, friends)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}
    byeFriend = event => {
        this.deleteFriend()
    }
render(){
    return(
    <div className = 'friend-card'>
        <div >
            <h2>{this.props.friend.name}</h2>
            <p>age: {this.props.friend.age}</p>
            <p>email: {this.props.friend.email}</p>  
        </div>

        <button className = 'close' onClick ={this.byeFriend}>X</button>
    </div>
    )
    }
}

export default Friends