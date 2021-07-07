import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FriendsList from './components/friendly/FriendsList.js';
import FriendForm from './components/friendly/FriendForm';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      nameTemp:'',
      ageTemp:'',
      emailTemp:'',
      myFriends: []
    };
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
        this.setState(() => ({ myFriends: response.data }));
        })
        .catch(error => {
        console.error('Server Error', error);
});
}

  clickHandler = (event) => {
    event.preventDefault();

    const newfriend = {
      name: this.state.nameTemp,
      age: this.state.ageTemp,
      email: this.state.emailTemp 
    }

    axios
    .post('http://localhost:5000/friends', newfriend)
    .then(response => {this.setState(() => ({ myFriends: response.data, nameTemp:'', ageTemp:'', emailTemp:''}));
    })
    .catch(error => {
    console.error('Server Error', error);
});
}

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <div className='AppBody'>
      <FriendForm onChangeHandler={this.onChangeHandler} clickHandler={this.clickHandler} ageTemp={this.state.ageTemp} nameTemp={this.state.nameTemp} emailTemp={this.state.emailTemp}/>
      <Route exact path='/' render={props => <FriendsList friends={this.state.myFriends} {...props}/>}/>
      </div>
    );
  }
}


export default App;
