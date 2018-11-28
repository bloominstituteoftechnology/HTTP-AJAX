import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';

class App extends Component {

  constructor() {

    super();

    this.state = {

      friendList: []

    }

  }

  componentDidMount() {

    axios.get('http://localhost:5000/friends')
      .then(data => {

        this.setState({friendList: data.data});
        console.log(data.data);

      }).catch(err => console.log(err));

  }

  render() {
    return (
      <FriendList list={this.state.friendList} />
    );
  }
}

export default App;
