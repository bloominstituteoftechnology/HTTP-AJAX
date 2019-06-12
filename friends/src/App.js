import React from 'react';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendList';
import BecomeFriendForm from './components/BecomeFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log('I am a mounted teapot')
  
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      console.log(res)
      this.setState({ friends: res.data });
    })
    .catch(err => alert("Sorry something went wrong: ", err));
  }

  render() {
    return (
    <div className="App">
      <header className="App-header"/>
      <FriendList friends={this.state.friends}/>
      <BecomeFriendForm />
    </div>
    )
  };
}

export default App;