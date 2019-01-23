import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'

class FriendList extends Component {
    constructor(){
        super()
        this.state ={
            friends: []
        }
    }
    componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
                // console.log("response:", response);
                this.setState({friends: response.data})
          })
          .catch( err => console.log("ERROR!!!"))
      }
    
    render(){
        return (
            <div className="App">
                {this.state.friends.map (friend => {
                    return <Friend 
                        key = {friend.id}
                        name = {friend.name}
                        age = {friend.age}
                        email = {friend.email}

                    />
                })}
            </div>
        )
    }
}

export default FriendList