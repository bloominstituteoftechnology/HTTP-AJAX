import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => console.log('err', err));
  }
    
  addFriend = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(e.target.name.value);
    console.log(e.target.age.value);
    const newFriend = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
    }
    if (newFriend.name && newFriend.age && newFriend.email) {
      this.setState((prevState) => {
        return {friends: [...prevState.friends, newFriend]}
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My {this.state.friends.length} Friends</h1>
        {this.state.friends.map(f => (
          <Friend key={f.id} friend={f} />
        ))}
        <FriendForm addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
