import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import AddFriend from './AddFriend.js'


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
    
    formSubmit = (friend) => {
        let newFriend = this.state.friends;
        friend.id = this.state.friends.length + 1;
        // console.log(newFriend)
        // console.log(friend)
        newFriend.push(friend)
        this.setState({ friend:newFriend })
        // console.log(this.state.friends)
    }


    render(){
        return (
            <div className="App">
                {this.state.friends.map (friend => {
                    return <Friend 
                        key = {friend.id}
                        name = {friend.name}
                        age = {friend.age}
                        email = {friend.email}/>
                })}
            
            <AddFriend handler ={this.formSubmit}/>

            </div>
        )
    }
}

export default FriendList