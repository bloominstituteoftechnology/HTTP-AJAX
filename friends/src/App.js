import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import Navigation from "./components/Navigation";
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  handleSetData = data => this.setState({ friendsData: data });


  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friendsData: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
      {/* <Switch> */}
      <Route path='/' component={Navigation}/>
      <Route exact path='/' render={(props) => <FriendsList {...props} friends={this.state.friendsData}/>} />
      <Route path='/add' render={(props) => <FriendsForm {...props} handleSetData={this.handleSetData}/>} />

    {/* </Switch> */}
    </div>
    );
  }
}

export default App;
