import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      nameText:'',
      ageText: '',
      emailText:'',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addFriend = event => {

    axios
      .post('http://localhost:5000/friends', 
        { 
          id: Date.now(),
          name: this.state.nameText,
          age: this.state.ageText, 
          email: this.state.emailText,
        })
      .then(() => {
        console.log('you did it');
      })
      .catch(() => {
        console.log('sad face');
      })

    this.setState({
      nameText:'',
      ageText: '',
      emailText:'',
    })
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends}/>
        <Form 
          nameText={this.state.nameText}
          ageText={this.state.ageText}
          emailText={this.state.emailText}
          handleChange={this.handleChange}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
