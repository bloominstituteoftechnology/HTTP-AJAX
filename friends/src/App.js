import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Route } from "react-router-dom";
import FriendList from "./components/FriendList"

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => this.setState({data: response.data}))
    .catch(error => console.log(error))
  }

  handleDeleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => this.setState({data: response.data}))
        .catch(error => console.log(error))
}

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <FriendList {...props} data={this.state.data}/>}/>
      </div>
    );
  }
}

export default App;
