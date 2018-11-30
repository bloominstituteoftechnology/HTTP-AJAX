import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./component/Home/Home";
import FriendsList from "./component/FriendsList/FriendsList";
import FriendsForm from "./component/FriendsForm/FriendsForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postMessage = (name, age, email) => {
    axios
      .post(`http://localhost:5000/friends`, { name, age, email })
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => {
        console.log("Try Again!" + err);
      });
  };

  updateFriend = (id, name, age, email) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, { name, age, email })
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav-menu">
          <ul className="friends-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/friendsform">Friends Form</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path={`/friends`}
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              update={this.updateFriend}
            />
          )}
        />
        <Route
          exact
          path={`/friendsform`}
          render={props => (
            <FriendsForm
              {...props}
              postMsg={this.postMessage}
              change={this.handleChange}
              edit
              data={this.state}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
