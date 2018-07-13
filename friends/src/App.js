import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state={
      friendsData:[],
      name:"",
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
    this.setState({name:event.target.value});
  };

  handleAgeChange= event => {
    this.setState({age:event.target.value});
  };

  handleEmailChange= event => {
    this.setState({email:event.target.value});
  };

  addFriend = event => {
    event.preventDefault();
    const friend={ 
      name:this.state.name,
      age:this.state.age,
      email:this.state.email}
    
    axios.post('http://localhost:5000/friends', friend)
      .then(response => {
        this.setState({friendsData: response.data, friend})
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
            name="name"
            value={this.state.name}
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
          name={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
