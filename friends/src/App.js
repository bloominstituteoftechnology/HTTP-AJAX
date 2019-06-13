import React from "react";
import "./App.css";
import FriendList from "./Component/friendsList";
import Form from "./Component/form";
import Friend from "./Component/friend";
import { Route , Switch, Redirect} from "react-router-dom";
import axios from "axios";
class App extends React.Component {
  state = {
    friends: [],
    errorMessage: "",
    newName: "",
    newAge: "",
    newEmail: "",
    added:false
  };
  getFriends = async () => {
    try {
      const axoisData = await axios.get("http://localhost:5000/friends");
      this.setState({ friends: axoisData.data });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
    console.log(this.state.friends);
  };
  postFriend = async (e,b) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/friends", {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      });
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  updateFriend = async(e, id) => {
    e.preventDefault()
    try {
      await axios.put(
        `http://localhost:5000/friends/${id}`,
        {
          name: this.state.newName,
          age: this.state.newAge,
          email: this.state.newEmail
        }
      );
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  deleteFriend = async id => {
    try {
      await axios.delete(`http://localhost:5000/friends/${id}`);
      return this.getFriends();
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
  };
  onChangeHandler = (e, text) => {
    text === "name"  && this.setState({ newName: e });
    text === "age" && this.setState({ newAge: e });
    text === "email" && this.setState({ newEmail: e });
  };

  componentDidMount() {
    this.getFriends();
    
  }
  render() {
    return (
      <div className="App">
      <Switch>
      <Route
      exact
      path="/"
      render={props => (

        <FriendList
          data={this.state.friends}
          delete={this.deleteFriend}
          {...props}
        />
      )}
    />
    <Route
    path="/add"
    render={props => (
      this.state.added ? <Redirect to='/' /> :
      <Form
        inputValue={this.onChangeHandler}
        submit={this.postFriend}
        {...props}
      />
    )}
  /> 
      <Route
          exact
          path="/:id"
          render={props => (
            <Friend
              data={this.state.friends}
              get={this.getFriends}
              update={this.updateFriend}
              delete={this.deleteFriend}
              {...props}
            />
          )}
        />
    
        <Route
          path="/:id/update"
          render={props => (
            <Form
               data={this.state.friends}
               get={this.getFriends}
              inputValue={this.onChangeHandler}
              submit={this.updateFriend}
              {...props}
            />
          )}
        />
       
        </Switch>
      </div>
    );
  }
}

export default App;
