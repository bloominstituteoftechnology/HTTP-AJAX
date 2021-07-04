import React, { Component } from 'react';
import axios from 'axios';
import AddFriend from './AddFriend.js'
import FriendCard from './FriendCard';
import UpdateFriends from './UpdateFriends'

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
    
    updateFriendInfo = (friend, id) => {
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then( response => console.log("RES:", response))
        .catch( err => console.log("ERROR CAN'T COMPUTE") )

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
        axios
        .delete(`http://localhost:5000/friends/${friend.id}`)
        .then( response => {
            this.setState({ friends:response.data })
        })
        .catch( err => console.log(err))
    }

    update = () => {
        console.log("HI")
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
            <UpdateFriends update = {this.update}/>
            </div>
        )
    }
}

export default FriendList