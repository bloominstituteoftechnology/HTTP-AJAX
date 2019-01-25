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

    delete = (searchID) => {
        // console.log("hi")

        // const newList = this.state.friends;

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
                                delete = {this.delete}
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