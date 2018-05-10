import React, { Component } from 'react';
import axios from 'axios';




export default class FriendsList extends Component {
    constructor(){
      super()
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
      }
    }
  
    componentDidMount(){
      this.getUsers()
    }
  
    getUsers = () => {
      axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friends: response.data })
        })
        .catch(err => console.log(err))
    } 
    render() {
        return(
            <div>
                
                <ul className = "friends">
                    {this.state.friends.map(friend => {
                        return (
                            <li key = {friend.id} className = "friend">
                            <div>
                            <p>Name - {friend.name}</p>
                            <p>Age - {friend.age}</p>
                            <p>Email - {friend.email}</p>
                            <br/>
                            </div>
                    </li>
                        )
                            
                    })}
                    
                </ul>
            </div>

            
        )
        
    }
    
}