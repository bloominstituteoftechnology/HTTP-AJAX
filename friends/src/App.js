import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
       name: '',
       age: '',
       email: '',
      friendsList: [],
     
    };    
    // name: '';
    // age: '';
    // email: '';

  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      // console.log(response.data);
      this.setState({friendsList: response.data})
      
    })
    .catch(err => {
      console.log(err);
    });
  };

  handleNameInput = e => {
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.name)
  };
  // // handleAgeInput = e => {
  // //   this.setState({ [e.target.age]: e.target.value});
  // //   console.log(this.state.age)
  // // };
  // handleEmailInput = e => {
  //   this.setState({ [e.target.email]: e.target.value});
  //   console.log(this.state.email)
  // };

  saveFriendData = () => {
    const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios.post('http://localhost:5000/friends', newFriend)
    .then(saveFriend => {
      console.log(saveFriend);
    })
    .catch(err => {
      console.log(err);
    });
  };

  updateFriendData = () => {
    const FriendtoUpdate = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios.post('http://localhost:5000/friends', FriendtoUpdate)
    .then(updateFriend => {
      console.log(updateFriend);
    })
    .catch(err => {
      console.log(err);
    });
  };

  deleteFriendData = friendId => {
    console.log(friendId);
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(deleteFriend => {
      this.getFriends();
      //console.log(deleteFriend);
    })
    .catch(err => {
      //console.log(err);
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends are</h1>
        </header>
        <h3> Enter a new friend below using Name, Age, and Email! </h3>
        {console.log(this.state)}
        <input type="text" onChange={this.handleNameInput} placeholder= 'Name' name='name' value={this.state.name} />
        <input type="number" onChange={this.handleNameInput} placeholder= 'Age' name='age' value={this.state.age} />
        <input type="text" onChange={this.handleNameInput} placeholder= 'Email' name='email' value={this.state.email} />
        <button name="button" type="submit" onClick={this.saveFriendData}> Submit </button>
        <button name="button" type="submit" onClick={this.updateFriendData}> Update </button>
        {this.state.friendsList.map(friend => {
          return (
            <div key={friend.id}>
            <h3>{friend.id}</h3>
            <button onClick={() => this.deleteFriendData(friend.id)}> delete friend </button>
            </div>
          )
        })}
        {/* <button name="button" type="submit" onClick={this.deleteFriendData}> Delete </button> */}
        <div> My Friends are {this.state.friendsList.map((friend) => {
            // {friend}
            const {name, age, email } = friend;
            //console.log(name);
            return <h3> Name is: {name} Age is: {age} Email is: {email} </h3> ;
          })}</div>
        </div>
    );
  }
}

export default App;
