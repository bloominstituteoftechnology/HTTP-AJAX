import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import FriendInfoForm from './components/FriendInfoForm';
import FriendsList from './components/FriendsList';
import AddFriendButton from './components/AddFriendButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
     friends: [],
     name: '',
     age: '',
     email: '',
      }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(res => this.setState({friends: res.data}))
  }

  handleFriendFormInput = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });  
  }

  handleSubmitBtn = event => {
    // event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log(err);
      })

  }

  handleFriendDeleteBtn = id => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`,
        axios.get('http://localhost:5000/friends')
          .then(res => {
            this.setState({friends: res.data})
          })
      )
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header> 
        <FriendsList friends= {this.state.friends} handleFriendDeleteBtn = {this.handleFriendDeleteBtn}/>
        <FriendInfoForm handleFriendFormInput = {this.handleFriendFormInput} />
        <br/>
        <AddFriendButton handleSubmitBtn = {this.handleSubmitBtn} handleFriendFormInput= {this.handleFriendFormInput}/>
        <br/>
      </div>
    );
  }
}

export default App;
