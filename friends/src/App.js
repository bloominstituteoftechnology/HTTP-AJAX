import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from  './components/FriendForm';

class App extends Component {

  constructor() {

    super();

    this.state = {

      url: 'http://localhost:5000/friends',
      friendList: [],
      currentFriend: {},

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

    this.setState({currentFriend: {}});

  }

  delete = id => {

    axios.delete(`${this.state.url}/${id}`)
      .then(data => this.setState({friendList: data.data}))
      .catch(err => console.log(err));

    this.setState({currentFriend: {}});

  }

  update = (id, newData) => {

    axios.put(`${this.state.url}/${id}`, newData)
      .then(data => this.setState({friendList: data.data}))
      .catch(err => console.log(err));

    this.setState({currentFriend: {}});

  }

  setCurrentFriend = newFriend => {

    this.setState({currentFriend: newFriend});

  }

  render() {
    return (

      <>

        <FriendForm currentFriend={this.state.currentFriend} friendList={this.state.friendList} updateFunc={this.update} addFunc={this.addToList} />
        <FriendList setCurrentFriend={this.setCurrentFriend} deleteFunc={this.delete} list={this.state.friendList} />

      </>

    );
  }
}

export default App;
