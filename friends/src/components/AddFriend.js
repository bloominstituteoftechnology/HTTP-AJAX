import React, { Component } from 'react';
import axios from 'axios';

class FriendManager extends Component {
    constructor(){
        super();
        this.state = {
            friends: [],
            newFriend: [],
            newName: '',
            newAge:'',
            newEmail:'',
            clicked: false
        };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState(() => ({ friends: response.data}));
    })
    .catch(error => {
        console.error('No Friends', error);
    })
}

  addName = (event) => {
      event.preventDefault();
      const newFriend = this.state.newFriend;
      newFriend.push(this.state.newName);
      this.setState({
        newName: '',
        newFriend: newFriend
      });
  }
  addAge = (event) => {
      event.preventDefault();
      const newFriend = this.state.newFriend;
      friends.push(this.state.newAge);
      this.setState({
        newAge:'',
        newFriend: newFriend
      });
  }
  addEmail = (event) => {
      event.preventDefault();
      const newFriend = this.state.newFriend;
      newFriend.push(this.state.newEmail);
      this.setState({
        newEmail:'',
        newFriend: newFriend
      });
  }

  handleNewNameInput = (event) => {
      this.setState({ 
          newName: event.target.value,
         });
  }
  handleNewAgeInput = (event) => {
      this.setState({ 
          newAge: event.target.value,
         });
  }
  handleNewEmailInput = (event) => {
      this.setState({ 
          newEmail: event.target.value,
         });
  }


//   handleClick = () => 

render(){
    return(
        <div>
            <form onSubmit={this.addName}>
                <input className="friend__textbox" type="text" onChange={this.handleNewNameInput} placeholder="-Enter A Name-" value={this.state.newName} />
            </form>
            <form onSubmit={this.addAge}>
                <input className="friend__textbox" type="text" onChange={this.handleNewAgeInput} placeholder="-Enter An Age-" value={this.state.newAge}/>
            </form>
            <form onSubmit={this.addEmail}>
                <input className="friend__textbox" type="text" onChange={this.handleNewEmailInput} placeholder="-Enter An Email-" value={this.state.newEmail}/>
            </form>
                
        </div>
    );
}




}

export { FriendManager };