import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';

class App extends Component {





  render() {
    return (
      <div className="App">
        <p>Yo yo yo, and a bottle of rum.</p>

        <FriendsList />

      </div>
    );
  }
}

export default App;


// addToList = (obj) => {

//   axios.post(this.state.url, obj)
//     .then(friends => this.setState({friendList: friends.data}))
//     .catch(err => console.log(err));

//   this.setState({currentFriend: {}});

// }