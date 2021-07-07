import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import NewFriendForm from './components/NewFriendForm'
import './App.css';


class App extends Component {
constructor () {
  super ();
  this.state = {
    friends: [],
      id: null,
      name: '',
      age: '',
      email: '',  
      
    
  };
};

componentDidMount() {
  axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data}) )
    .catch(error => console.log(error))
}

changeHandler = event => {
  event.preventDefault();
  this.setState({[event.target.name]: event.target.value});
}

addFriendButton = event => {
  event.preventDefault();
  //How do i make it where the page doesnt refresh every time i click the button?
  const friend = {
    id: event.target.value,
    name: this.state.name,
    age: this.state.age,
    email: this.state.email,
  };
  axios
  .post('http://localhost:5000/friends', friend )
  .then( response => this.setState({ friends: response.data })) 
  .catch (error => console.log('Error: ', error ))
}

deleteFriendButton = event => {
  axios
  .delete(`http://localhost:5000/friends/${event.target.id}`)
  .then( ({data}) => this.setState({friends: data})) 
  .catch (error => console.log('Error: ', error ))
}


updateFriend = (event) => {
  // event.preventDefault();
  const friend = {
    id: event.target.id,
    name: this.state.name,
    age: this.state.age,
    email: this.state.email,
  };
  axios
    .put(`http://localhost:5000/friends/${event.target.id}`, friend )
    .then(response => this.setState({ friends: response.data }))
    .catch (error => console.log('Error: ', error ))
    
}

 render() {
  console.log('data..', this.state.friends);
  return (
    
    <div className="App">
    {/* how do i refactor this? */}
      {/* {
       this.state.friends.map(element => {
         return <FriendsList
          deleteFriendButton = {this.deleteFriendButton} key={element.id} 
          friends={element}
          updateFriend = {this.updateFriend}/>

       })
      } */}
      <FriendsList 
      deleteFriendButton={this.deleteFriendButton} 
      key={this.state.id} 
      friends={this.state.friends} 
      updateFriend = {this.updateFriend}  
      />
      <NewFriendForm 
        addNewFriend = {this.addFriendButton}
        changeHandler={this.changeHandler} 
      
      />
    </div>
  );
}
}


export default App;
