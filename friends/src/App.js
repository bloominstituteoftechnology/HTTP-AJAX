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

    
    
  }
  getData = () => {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
        // console.log(response);
      })
      .catch(err => console.log(err))
  }
  updateName = (event) => {
    this.setState({ newName: event.target.value })
    console.log(this.state);
  }
  updateAge = (event) => {
    
    this.setState({ newAge: Number(event.target.value) })
    console.log(this.state);
  }
  updateEmail = (event) => {
    this.setState({ newEmail: event.target.value })
    console.log(this.state);
  }


  addFriend = (event) => {
    
    event.preventDefault();  // NOT WORKING!!! WHY NOT!!?!?!?!?!?!?!?!
    console.log(this.state.friends);
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }
    
    axios.post("http://localhost:5000/friends", newFriend)
    .then(response => {
      this.setState({
        newName: '',
        newAge: '',
        newEmail: '',
      })
      this.getData();
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    
    console.log('submitted');

    

    // axios({
    //   method: 'post',
    //   url: "http://localhost:5000/friends",
    //   data: newFriend
    // });

    
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => {
        return(
          <DisplayFriends key={friend.name} friend={friend} />
        )
      })}
        <Form onSubmit={this.addFriend} >
          <Input type="text" placeholder="Enter name" onChange={this.updateName} value={this.state.newName}/>
        
          <Input type="number" placeholder="Enter Age" onChange={this.updateAge} value={this.state.newAge}/>
        
          <Input type="text" placeholder="Enter Email" onChange={this.updateEmail} value={this.state.newEmail}/>
          <Button>Add Friend</Button>
        </Form>
        
      
      </div>
    );
  }

  componentDidMount() {
    this.getData();
  }
}

export default App;
