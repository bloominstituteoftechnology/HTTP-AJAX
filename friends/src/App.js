import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./Components/FriendsList";
import FriendCard from "./Components/FriendCard";
import Form from "./Components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  addNewFriend = data => {
    axios
      .post("http://localhost:5000/friends", data)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  editFriend = (data, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, data)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <FriendsList data={this.state.data} selectId={this.selectId} />

        <Route
          exact
          path="/add-form"
          render={props => (
            <Form
              {...props}
              addNewFriend={this.addNewFriend}
              data={this.state.data}
            />
          )}
        />

        <Route
          exact
          path="/edit-form/:id"
          render={props => (
            <Form
              {...props}
              editFriend={this.editFriend}
              data={this.state.data}
              edit // edit === true
            />
          )}
        />

        {this.state.data.length && (
          <Route
            path="/friend/:id"
            render={props => (
              <FriendCard
                {...props}
                data={this.state.data}
                deleteFriend={this.deleteFriend}
                editFriend={this.editFriend}
              />
            )}
          />
        )}
      </div>
    );
  }
}

export default App;
