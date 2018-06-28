import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Navigation from "./components/Navigation";
import { Route} from 'react-router-dom';

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
      <Route path='/' component={Navigation}/>
      <Route exact path='/' render={(props) => <FriendsList {...props} friends={this.state.friendsData}/>} />
      <Route path='/add' render={(props) => <Add {...props} handleSetData={this.handleSetData}/>} />
      <Route path='/update' render={(props) => <Update {...props} handleSetData={this.handleSetData}/>} />
      <Route path='/delete' render={(props) => <Delete {...props} handleSetData={this.handleSetData}/>} />
    </div>
    );
  }
}

export default App;
