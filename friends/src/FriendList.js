import React from 'react';
import axios from 'axios';
import Friend from './Friend';

import FriendForm from './FriendForm';


export default class FriendList extends React.Component {
    constructor(){
      super(); 
      this.state = {
          friends: [],
          newFriend:{
            name: '',
            age: 1,
            email: ''
          }
      }
    }

    componentDidMount() {
      axios.get('http://localhost:5000/friends')
        .then( response => {
          this.setState({
            friends: response.data
          });
        })
        .catch( error => {
          console.log(error);
        })
    }

    inputChange = e => {
      e.preventDefault();
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          [e.target.name]: e.target.value,
        }
      })
    }

    numberInputChange= e => {
      e.preventDefault();
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          [e.target.name]: parseInt(e.target.value),
        }
      })
    }

    addNewFriend = () => {
      axios.post('http://localhost:5000/friends', this.state.newFriend)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      
      this.setState({
        newFriend: {
          name: '',
          age: 1,
          email: ''
        }
      })
    }

    updateFriend = (friend) => {
      axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log(error))
    };

    deleteFriend = (friend) => {
      axios.delete(`http://localhost:5000/friends/${friend.id}`)
        .then(response => this.setState({ friends: response.data}))
        .catch(error => console.log(error))
    }

    render(){
      return(
        <div>
          {this.state.friends.map(friend => 
            <Friend 
              key={friend.id} 
              friend={friend} 
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}/>)}
            <FriendForm 
              inputChange={this.inputChange} 
              addNewFriend={this.addNewFriend} 
              numberInputChange={this.numberInputChange} 
              newFriend={this.state.newFriend}/>
        </div>
      )
    }
}