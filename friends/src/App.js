import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';
import FriendCard from './FriendCard';
import { Button, Form, FormGroup } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      age: '',
      email: '',
      name: '',
      FriendCard: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({notes: response.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleTextInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  saveNoteData = () => {
    const note = { age: this.state.age, email: this.state.email, name: this.state.name };
    axios.post('http://localhost:5000/friends', note)
    .then(savedNote => {
      console.log(savedNote);
    })
    .catch(err => {
      console.log(err);
    });
    this.setState({age: '', email: '', name: ''});
  };

  render() {
    const { FriendCard } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Friends Forever</h1>
        </header>
        <Form inline>
        <input 
          type='number' 
          onChange={this.handleTextInput}
          placeholder="age" 
          name="age" 
          value={this.state.age} 
        />
        <input 
          type='email' 
          onChange={this.handleTextInput}
          placeholder="email" 
          name="email" 
          value={this.state.email} 
        />
        <input 
          type='text' 
          onChange={this.handleTextInput}
          placeholder="name" 
          name="name" 
          value={this.state.name} 
        />
        <Button color="secondary" onClick={this.saveNoteData}>add friend</Button>{' '}
        <FriendsList friends={FriendCard}/>
        </Form>
      </div>
    );
  }
}

export default App;
