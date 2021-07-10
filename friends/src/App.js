import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import FriendPage from './components/FriendPage';
import Home from './components/Home';

import './App.css';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ghostwhite;
`



const blankFormValues = {
  name: '',
  age: '',
  email: '',
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // friendToUpdate: null,
      friends: [],
      friend: {
        name: '',
        age: '',
        email: '',
      },
      isUpdating: false,
    };
  }

  //http://localhost:5000/friends is where the data is located, hence
  // .get() .post() .delete() methods have to reference this
  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({friends: response.data });
      })
      .catch(err => {
        console.log("IN CATCH", err);
      })
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value,
      }
    });
  }

  handleAddNewFriend = event => {
    event.preventDefault();
    axios
      // .post("http://localhost:5000/friends", this.state.friend)
      .post("http://localhost:5000/friends", this.state.friend)
      // try changing this


      .then(response => {
        this.setState({ friends: response.data, friend: blankFormValues }, () => this.props.history.push('/friendslist'))
        //redirect to main page after adding a friend
        // history.push('/friendslist')
      })
      .catch(err => {
        console.log("COULD NOT ADD NEW FRIEND", err);
      })
  }

  handleDeleteFriend = id => {
    console.log(id)
    return axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => this.setState({ friends: response.data }, () => this.props.history.push('/friendslist')));
  }

  goToUpdateFriendForm = (event, id) => {
    console.log('firing', id);
    event.preventDefault();
    const friendToUpdate = this.state.friends.find(friend => friend.id === id);
    // this.setState({ friendToUpdate: friendToUpdate, friend: friendToUpdate }, () => this.props.history.push('/friend-form'));
    this.setState({ isUpdating: true, friend: friendToUpdate }, () => this.props.history.push('/friend-form'));  //'/friend-form'
  }

  handleUpdateFriend = id => {
    axios.put(`http://localhost:5000/friends/${id}`, this.state.friend)
    .then(response => {
      console.log(response.data)
      this.setState({ friends: response.data, isUpdating: true, friend: this.state.friend }, () => this.props.history.push('/friendslist'))
      }
    )
    .catch(err => {
      console.log("COULD NOT UPDATE EXISTING FRIEND", err);
    })
  }



  render() {
    return (
      <div className="App">
        <ul className="navbar">
            <li>
              <StyledNavLink to="/">
                <h1>Home</h1>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/friendslist">
              <h1>Friends </h1>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/friend-form">
                <h1>Add Friend</h1>
              </StyledNavLink>
            </li>
        </ul>

        <Route exact path="/" component={Home} />

        <Route exact path="/friendslist"
          render={props => (<FriendList {...props} friends={this.state.friends}/> )}
         />

        <Route path="/friendslist/:id"
          render={props => (
          <FriendPage 
          {...props}
          // name={this.state.friend.name} 
          // id={this.state.friend.id}
          // age={this.state.friend.age}
          // email={this.state.friend.email}

          friends={this.state.friends}
          handleDeleteFriend={this.handleDeleteFriend}
          goToUpdateFriendForm={this.goToUpdateFriendForm}
          /> )}
          />

        <Route
            path="/friend-form"
            render={props => (
            <FriendForm 
              {...props} 
              handleAddNewFriend={this.handleAddNewFriend}
              handleChange={this.handleChange} 
              newfriend={this.state.friend}
              handleUpdateFriend={this.handleUpdateFriend}
              // friendToUpdate={this.state.friendToUpdate}
              isUpdating={this.state.isUpdating}

              />
            )}
        />
      </div>
    );
  }
}

export default withRouter(App);
