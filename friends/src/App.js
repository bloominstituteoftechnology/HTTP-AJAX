import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state={
      friendsData:[],
      friends:"",
      age:"",
      email:""
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

  addFriend() {
    // event.preventDefault();
    const friend={ friend:this.state.friends}
    const age={ age:this.state.age}
    const email={ email:this.state.email}
    axios.post('http://localhost:5000/friends', friend, age, email)
      .then(response => {
        this.setState({friendsData: response.data, friends:"", age:"", email:""})
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">

        <form>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleNameChange}
            name="friends"
            value={this.state.friend}
          />
          <input
            type="number"
            placeholder="age"
            onChange={this.handleAgeChange}
            age="age"
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleEmailChange}
            email="email"
            value={this.state.email}
          />
          <button onClick={this.addFriend}>Add Friend</button>
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
