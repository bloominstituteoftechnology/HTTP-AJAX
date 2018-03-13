import React, { Component } from 'react';

import axios from 'axios';
import { Form, Input, Button } from 'reactstrap';
import DisplayFriends from './components/DisplayFriends';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      
      newName: '',
      newAge: '',
      newEmail: ''
      
    }

    this.updateName = (event) => {
      this.setState({ newName: event.target.value })
      console.log(this.state);
    }
    this.updateAge = (event) => {
      
      this.setState({ newAge: Number(event.target.value) })
      console.log(this.state);
    }
    this.updateEmail = (event) => {
      this.setState({ newEmail: event.target.value })
      console.log(this.state);
    }
    this.addFriend = (event) => {
      event.preventDefault();
      const newFriend = {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.email
      }
      
      console.log('submitted');
      axios.push("http://localhost:5000/friends", newFriend)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      // axios({
      //   method: 'post',
      //   url: "http://localhost:5000/friends",
      //   data: newFriend
      // });
      this.setState({
        newName: '',
        newAge: '',
        newEmail: '',
      })
    }
    
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => {
        return(
          <DisplayFriends key={friend.name} friend={friend} />
        )
      })}
        <Form>
          <Input type="text" placeholder="Enter name" onChange={this.updateName} value={this.state.newName}/>
        
          <Input type="number" placeholder="Enter Age" onChange={this.updateAge} value={this.state.newAge}/>
        
          <Input type="text" placeholder="Enter Email" onChange={this.updateEmail} value={this.state.newEmail}/>
          <Button onSubmit={this.addFriend} >Add Friend</Button>
        </Form>
        
      
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => console.log(err))
  }
}

export default App;
