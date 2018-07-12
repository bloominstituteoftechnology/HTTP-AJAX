import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state={
      friendsData:[],
      friends:""
    };
  }

  handleData = data => this.setState ({friendsData:data});
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friendsData: response.data})
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleNameChange= event => {
    this.setState({friend:event.target.value});
  };

  handleAgeChange= event => {
    this.setState({age:event.target.value});
  };

  handleEmailChange= event => {
    this.setState({email:event.target.value});
  };

  render() {
    return (
      <div className="App">

        <form>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleNameChange}
            name="friend"
            value={this.state.friend}
          />
          <input
            type="text"
            placeholder="age"
            onChange={this.handleAgeChange}
            name="age"
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleEmailChange}
            name="email"
            value={this.state.email}
          />
        </form>

        <FriendsList
          handleData={this.handleData}
          friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
