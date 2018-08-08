import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import { Route } from "react-router-dom";
import styled, {injectGlobal} from 'styled-components';

const url = "http://localhost:5000/friends";

injectGlobal`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #dfe6e9;

  }
`

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

class App extends Component {
  state = {
    friends: [],
    loading: true,
    add: false
  };

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data,
        loading: false,
      });
    });
  }

  handleToggleAdd = () => {
    this.setState(prevState => ({ 
      add: !prevState.add
    }))
  }

  handleAddFriend = (name, age, email) => {
    let friend = {
      id: this.state.friends.length + 2,
      name: name,
      age: age,
      email: email,
    };
    axios
      .post(url, friend)
      .then(response => {
        this.setState({ friends: response.data });
        this.handleToggleAdd();
      })
      .catch(response => {
        console.log(`error ${response}`);
      });
  };

  handleDelete = id => {
    axios.delete(`${url}/${id}`).then(response => {
      this.setState({ friends: response.data });
    });
  };

  handleUpdate = friend => {
    axios.put(`${url}/${friend.id}`, friend).then(response => {
      this.setState({ friends: response.data })
    })
  }
  

  render() {
    return (
      <AppWrapper>
        <FriendsList
          friends={this.state.friends}
          loading={this.state.loading}
          deleteFriend={this.handleDelete}
          updateFriend={this.handleUpdate}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          add={this.state.add}
          handleShowAdd={this.handleToggleAdd}
        />
        {this.state.add &&
        <Route
          path="/add"
          render={props => (
            <AddFriend {...props} addFriend={this.handleAddFriend} />
          )}
        /> }
      </AppWrapper>
    );
  }
}

export default App;
