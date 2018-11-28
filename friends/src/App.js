import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from  './components/FriendForm';

class App extends Component {

  constructor() {

    super();

    this.state = {

      url: 'http://localhost:5000/friends',
      friendList: []

    }

  }

  componentDidMount() {

    axios.get(this.state.url)
      .then(data => {

        this.setState({friendList: data.data});

      }).catch(err => console.log(err));

  }

  addToList = (obj) => {

    axios.post(this.state.url, obj)
      .then(data => this.setState({friendList: data.data}))
      .catch(err => console.log(err));

  }

  render() {
    return (

      <>

        <FriendForm addFunc={this.addToList} />
        <FriendList list={this.state.friendList} />

      </>

    );
  }
}

export default App;
