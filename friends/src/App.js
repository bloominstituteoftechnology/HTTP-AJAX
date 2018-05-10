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

  handleAdd = nFriend => {
    axios
      .post("http://localhost:5000/friends", nFriend)
      .then(info => {
        const friends = info.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)); 
  };

  handleUpdate = (id, uf) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, uf)
      .then(info => {
        const friends = info.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err));
  };
  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(info => {
        const friends = info.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)); 
  };
  render() {
    const { friends } = this.state;
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/addfriend">
          <button>Add New Friend</button>
        </Link>
        <Route
          exact
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={friends}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/addfriend"
          render={props => <NewFriends {...props} handleAdd={this.handleAdd} />}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <NewFriends
              {...props}
              friends={friends}
              handleUpdate={this.handleUpdate}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
