import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/Friends/FriendsList";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      f: [],
      newFriendName: "",
      newFriendEmail: "",
      newFriendAge: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log("GIT RESPONSE", response);
        this.setState({ f: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  handleNewFriendText = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmitNewFriend = event => {
    event.preventDefault();
    let URL = "http://localhost:5000/friends";
    if (
      this.state.newFriendName &&
      this.state.newFriendEmail &&
      this.state.newFriendAge
    ) {
      // bundle and send to server
      let serverMessage = {
        name: this.state.newFriendName,
        email: this.state.newFriendEmail,
        age: this.state.newFriendAge
      };

      axios
        .post(URL, serverMessage)
        .then(response => {
          // console.log("POST RESPONSE: ", response);
          // now set state when you see the new data
          this.setState({ f: response.data });

          // reset state fields
          this.setState({
            newFriendName: "",
            newFriendEmail: "",
            newFriendAge: ""
          });
        })
        .catch(error => {
          console.log("POST ERROR: ", error);
        });
    } else {
      // alert missing data
      alert(
        "All form fields are required. Please check your data and try again"
      );
    }
  };

  render() {
    // console.log("THIS STATE: ", this.state);
    return (
      <div>
        <Route exact path={"/"} component={LandingPage} />
        <Route
          path={"/friends"}
          render={props => {
            return (
              <FriendsList
                {...props}
                f={this.state.f}
                newTextHandler={this.handleNewFriendText}
                handleSubmit={this.handleSubmitNewFriend}
              />
            );
          }}
        />
        {/*<FriendsList f={this.state.f} foo="bar" />*/}
      </div>
    );
  }
}

export default App;
