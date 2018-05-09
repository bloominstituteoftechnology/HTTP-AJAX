import React, { Component } from "react";
import axios from "axios";
import Friends from "./components/Friends";
import NewFriends from "./components/NewFriends";
import { Link, Route } from "react-router-dom";

class App extends Component {
  state = { friends: [] };
  
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(info => {
      const friends = info.data;
      this.setState({ friends });
    });
  };
  handleSubmit = nFriend => {
    axios.post("http://localhost:5000/friends/", nFriend).then(info => {
      const friends = info.data;
      this.setState({ friends });
    });
  };

  render() {
    const { friends } = this.state;

    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/newbff">
          <button>New Friends</button>
        </Link>
        <Route
          exact path="/"
          render={props => <Friends {...props} friends={friends} />}
        />
        <Route
          path="newbff"
          render={props => <NewFriends {...props} handleSubmit={this.handleSubmit} />}
        />
      </div>
    );
  }
}

export default App;
