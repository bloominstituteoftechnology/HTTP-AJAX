import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';
import axios from 'axios';
import FriendCard from './FriendCard';
import Form from './Form';


export default class Friend extends React.Component {
    state ={
        friend: {},
        mutate: false,
        friendPage: true,
        newList: []

    }

    mutate = () => {
        this.setState({mutate: !this.state.mutate});
        
    }

    handleInput = (e) => {
        this.setState({
          friend: { ...this.state.friend,
            [e.target.name]: e.target.value
          }
        })
      }

      
      deleteFriend = () => {
          
          this.props.deleteFriend(this.state.friend.id);
          console.log(this.state.newList)
          this.props.history.push('/'); 
      }

      submitFriend = () => {
        /* let newFriend = this.state.friend;
        this.props.formType === 'add' ?
        axios
          .post('http://localhost:5000/friends', newFriend)
          .then(response => this.setState({friends: response.data})) :
    
          axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, newFriend).then(response => console.log(response)) */
          this.props.submitFriend(this.state.friend.id, this.state.friend);
          this.props.history.push('/');
      
      }
componentDidMount(){
    let id = this.props.match.params.id;
    
    axios.get('http://localhost:5000/friends').then(response => { 
       
        let newId = response.data.filter(friend => `${friend.id}` === `${this.props.match.params.id}` );

        return newId;
        }).then(response => {
            
             this.setState({friend: response[0]}) 
        })
}
   render(){ 
       

    if (!this.state.friend) {
        return <div>Loading friend information...</div>;
      }
return (
        <div className="friend-container">
    <FriendCard friend={this.state.friend}  delete={this.deleteFriend} friendPage/>
    <div className="here" onClick={this.mutate}>MUTATE NOW</div>
    {this.state.mutate ? <Form submitFriend={this.submitFriend} handleInput={this.handleInput} formType={this.props.formType} newFriend={this.state.friend}/> : null}
  </div>
    )
}
}

