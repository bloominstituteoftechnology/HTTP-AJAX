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
  // event.preventDefault();
  //How do i make it where the page doesnt refresh every time i click the button?
  const friend = {
    id: null,
    name: this.state.name,
    age: this.state.age,
    email: this.state.email,
  };
  axios
  .post('http://localhost:5000/friends', friend )
  .then( response => console.log("Response: ", response)) 
  .catch (error => console.log('Error: ', error ))
}

deleteFriendButton = event => {
  axios
  .delete(`http://localhost:5000/friends/${event.target.id}`)
  .then( ({data}) => this.setState({friends: data})) 
  .catch (error => console.log('Error: ', error ))
}

/* axios promises
    .then - do this
    .catch - if all .then not working then .catch will return the error response

*/
render() {
  console.log('data..', this.state.friends);
  return (
    
    <div className="App">
    {/* how do i refactor this? */}
      {
       this.state.friends.map(element => {
         return <FriendsList deleteFriendButton = {this.deleteFriendButton} key={element.id} friends={element}/>

       })
      }
      <NewFriendForm 
        addNewFriend = {this.addFriendButton}
        changeHandler={this.changeHandler} 
      
      />
    </div>
  );
}
}


export default App;
