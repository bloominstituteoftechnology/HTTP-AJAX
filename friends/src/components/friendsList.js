import React, { Component } from 'react';
import axios from 'axios';
   

export default class App extends Component {
        constructor() {
        super();
     }

  deleteFriend = (id) => {
    axios.delete("http://localhost:5000/friends/" +id)
      .then(res => {
        this.props.updateData(res.data);
      })
      .catch(err => {
        console.log(err);
    })
  }
  
render() {
        return (
            <div>
                <h2 className="text-white">FriendsList</h2>
                {this.props.friends.map((friend, index) => {
                    return (
                        <div>
                            <p className="text-white">Name: {friend.name}</p>
                            <p className="text-white">Age: {friend.age}</p>
                            <p className="text-white">Email: {friend.email}</p>
                            <button onClick={() => { this.deleteFriend(friend.id) }}>X</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}