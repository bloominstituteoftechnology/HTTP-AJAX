import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NewFriend from './components/NewFriend';
import Friends from './components/Friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.url='http://localhost:5000/friends';
    this.state = {
      name: '',
      age: '',
      email: '',
      friendList: [],
    };
  }

  componentDidMount() {
    const friendRequest = axios.get(this.url);
    friendRequest.then((response) => { this.setState({ friendList: response.data }); });
  }

  handleInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    this.setState({[fieldName]: value});
  }

  addNewFriend = (e) => {
    e.preventDefault();
    let {friendList, ...rest} = this.state;
    const friendPost = axios.post(this.url, rest);
    friendPost.then((response)=>{console.log(response)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friend Having Utility</h1>
        </header>
        <Friends friendList={this.state.friendList} />
        <NewFriend
          nameInput={this.state.name}
          ageInput={this.state.age} 
          emailInput={this.state.email}
          handleInput={this.handleInput}
          addNewFriend={this.addNewFriend}
          />
      </div>
    );
  }
}

export default App;
