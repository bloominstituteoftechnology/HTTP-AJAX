import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import AddFriend from './AddFriend.js'
import FriendCard from './FriendCard';
import { Link } from 'react-router-dom';


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
        axios
            .post("http://localhost:5000/friends", friend)
            .then(response => {
                this.setState({ friends:response.data })
            })
            .catch( err => console.log("REJECTED!", err))
    }

    deleteFromServer = (friend) => {
        // console.log(friend.id)
        axios
        .delete(`http://localhost:5000/friends/${friend.id}`)
        .then( response => {
            this.setState({ friends:response.data })
            // console.log(response)
        })
        .catch( err => console.log(err))
    }

    render(){
        return (
            <div className="App">

                {this.state.friends.map (friend => {
                    return(
                        <div>
                            <FriendCard
                                key = {friend.id}
                                id = {friend.id}
                                name = {friend.name}
                                age = {friend.age}
                                email = {friend.email}
                                deleteFromServer = {this.deleteFromServer}
                                />
                            <h2>---------------------------------------</h2>

                        </div>
                    ) 
                })}
            
            <AddFriend handler ={this.formSubmit}/>

            </div>
        )
    }
}

export default FriendList