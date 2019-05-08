import React, { Component } from 'react';
import axios from 'axios';
import AddNewFriend from './AddNewFriend';

export default class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state ={
            friends: []
        };
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}));
        })
        .catch(error => {
            console.error('Server Error', error);
        })
    }

    addFriend = friend => {
        axios
        .post('http://localhost:5000/friends', friend)
        .then(res => console.log(res))
        .catch(err => console.log(err) )

    }

    render(){
    return(
        <div className= "friendlistwrapper">
         {this.state.friends.map(friend => ( <div key = {friend.id}>
            <p>Name: {friend.name} </p>
            <p>Age: {friend.age} </p>
            <p>Email: {friend.email} </p>

         </div>

         ))}
        
        <div>
        <AddNewFriend addFriend ={this.addFriend} />

        </div>
        </div>
    )

}
}

