import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/friends";
import NewFriends from './components/newFriends';
import { Route } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      url: url,
    };
  }
  
  componentDidMount() {
    // console.log("testing axios")
    axios.get(this.state.url).then(response => {
      // console.log(response);

      // console.log(response.data);
      this.setState({
        friendsList: response.data
      });
    });
  }

  

  render() {

    return (
      <div className="App">
        component with list of friends will be displayed here
        {/* {console.log(props.url)}; */}
        
        <Route
          path="/"
          render={props => {
            return <Friends {...props} friendsList={this.state.friendsList} />;
          }}
        />
        <Route 
          path="/"
          render={props => {
            return <NewFriends {...props} />
          }}
          />
        {/* <Friends friends={this.state.friendsList}/>  */}
      </div>
    );
  }
}

export default App;
