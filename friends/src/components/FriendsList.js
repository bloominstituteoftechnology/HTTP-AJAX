import React, { Component } from 'react';
import axios from 'axios';
import AddNewFriend from './AddNewFriend';


export default class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state ={
            friends: [],
            activeFriend: null
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
        .then(res => {
            this.setState({friends: res.data})
            console.log(res)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))

    }

    updateFriend = (updatedFriend) => {
        axios
        .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    deleteFriend = (e,id) => {
        e.preventDefault();
        axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => {
            this.setState({friends: res.data})
            console.log(res)
            this.props.history.push('/')       
         })
        .catch(err => console.log(err))
    }

    render(){
    return(
        <div className= "friendlistwrapper">
         {this.state.friends.map(friend => ( <div key = {friend.id}>
            <p>Name: {friend.name} </p>
            <p>Age: {friend.age} </p>
            <p>Email: {friend.email} </p>
            <button onClick={e => this.deleteFriend(e,friend.id)}>X</button>
         </div>

         ))}
        
        <div>
        <AddNewFriend addFriend ={this.addFriend} />

        </div>
        </div>
    )

}
}

