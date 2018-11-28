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
    const newFriend = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
      id: Date.now(),
    }

    // add new friend if all fields are filled out
    if (newFriend.name && newFriend.age && newFriend.email) {
      axios.post('http://localhost:5000/friends', newFriend)
        .then(res => {
          this.setState({ friends: res.data})
        })
        .catch(err => console.log(err));

      // clear inputs
      e.target.name.value = '';
      e.target.age.value = '';
      e.target.email.value = '';

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
