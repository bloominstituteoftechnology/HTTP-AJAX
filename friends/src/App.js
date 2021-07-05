import React, { Component } from "react";
import "./App.css";
import FriendsList from "./component/FriendsList";
import SubmitFriendForm from "./component/SubmitFriendForm";
import axios from "axios";
import { Route,Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount = () => {
    this.updateFriends();
  };
  updateFriends = () => {
    axios
      .get("http://127.0.0.1:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <Link to='/'> Home</Link>
        <Route  
        exact 
          path="/"
          render={props => (
            <div>
              <FriendsList {...props} friends={this.state.friends} />
              <SubmitFriendForm {...props} methodToCall={this.updateFriends} />
            </div>
          )}
        />
         <Route   
          path="/friend/:id"
          render={(props) => (
            <div>
              <FriendsList {...props} friends={this.state.friends} />
              <SubmitFriendForm {...props} methodToCall={this.updateFriends} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
