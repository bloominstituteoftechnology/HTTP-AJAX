import React from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
        });
      })
      .catch(err => {
        console.log('ERR');
      });
  }

  render() { 
    return (
      <div>
        <h1>Friend App</h1>
        <FriendForm />
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;