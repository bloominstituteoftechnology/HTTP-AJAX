import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/friends";
import { Route } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    // console.log("testing axios")
    axios.get(url).then(response => {
      console.log(response);

      console.log(response.data);
      this.setState({
        friendsList: response.data
      });
    });
  }

  render() {

    return (
      <div className="App">
        component with list of friends will be displayed here
        <Route
          path="/"
          render={props => {
            return <Friends friendsList={this.state.friendsList} {...props} />;
          }}
        />
        {/* <Friends friends={this.state.friendsList}/>  */}
      </div>
    );
  }
}

export default App;
