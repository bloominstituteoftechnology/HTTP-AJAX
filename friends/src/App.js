import React from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import Header from "./components/Header";
import DisplayPanel from "./components/DisplayPanel";
import Operations from "./components/Operations";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    friends: []
  };
  componentWillMount() {
    console.log("inside CDM");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("below Fetch");
  }

  render() {
    return (
      <div className="App">
                <Header />
        <Route
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Operations />
        <Route exact path="/friends/:id" component={Friend} />
        <Route exact path="/displayPanel" component={DisplayPanel} />
      </div>
    );
  }
}

export default App;
