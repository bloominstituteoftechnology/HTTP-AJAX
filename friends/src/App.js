import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { FriendForm } from "./components/FriendForm"
import { Button, Card, CardText, CardSubtitle, CardTitle } from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      id: 0,
      name: '',
      email: '',
      age: 0
    }
  }


  handleChange = (event) => {
    const { name , value } = event.target;
    this.setState({ [name]: value })
    console.log(this.state);
}


addFriend = (event) => {
  event.preventDefault()
  const { name, age, email } = this.state;   
  axios.post('http://localhost:5000/friends', {
      name,
      age,
      email
    })
    .then(response => {
        console.log(`this is response from addFriend ${response}`);
      this.setState({ friends: response.data});
    })
    .catch(error => {
      console.log(`there was an error posting friends: ${error}`);        
    });
}


deleteFriend(id) {
  console.log(id);
  axios.delete(`http://localhost:5000/friends/${id}`) 
  .then(response => {
    this.setState({ friends: response.data });
  })
  .catch(error => {
     console.error('Error', error);
   });
 }



 handleSubmit = (event) => {
  event.preventDefault();
  const { name, age, email, id, friends } = this.state; // object destructuring
  let flag = false
  friends.forEach(friend => {
    if (friend.id == id) flag = true
  })
  if (flag) {
    axios 
    .put(`http://localhost:5000/friends/${id}`, { name, email, age })
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.error('Error', error);
    });
  } else {
    axios.post('http://localhost:5000/friends', {
      name,
      age, 
      email,
    })
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }
}

  render() {
    const {id, name, email, age} = this.state;
    return (
      <div className="App">
        <div className="title"> Lambda Friends </div>
        <div className="col-md-4">
          {this.state.friends.map(friend =>{
            return (
              <Card key={friend.id}>
                <CardTitle className="float-left">{friend.name} <span><Button color="danger" onClick={() => this.deleteFriend(friend.id)}>Delete Me</Button></span></CardTitle>
                <CardSubtitle>{friend.email}</CardSubtitle>
                <CardText> {friend.age} </CardText>
              </Card>
            )
          })}
        </div>
        <FriendForm name={name} age={age} email={email}  id={id} handleChange={this.handleChange} addFriend={this.addFriend} handleSubmit={this.handleSubmit} />
      </div>
    );
  }


componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then(response => {
      console.log(response);
      this.setState({ friends: response.data });
      })
  .catch(error => {
      console.log(`There was an error getting friends: ${error}`);
      });
    }
    

}

export default App;
