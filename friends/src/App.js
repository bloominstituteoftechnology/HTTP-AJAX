import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './Components/Friends';
import Friend from './Components/Friend';
import DisplayFriend from './Components/DisplayFriend';
import AddFriend from './Components/AddFriend';
import './style.css';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const urlLinks = {
  home: '/',
  friend: `/friend`,
  addFriend: '/addfriend'
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  changeHandler = e => {
    let newKeyValue = e.target.value;
    this.setState({
      [e.target.name]: newKeyValue
    });
  };

  addFriend = newFriend => {
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <Route
          exact
          path={urlLinks.home}
          render={props => (
            <AddFriend
              {...props}
              friends={this.state.friends}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
              newName={this.state.newName}
              newAge={this.state.newAge}
              newEmail={this.state.newEmail}
            />
          )}
        />
        <Route
          exact
          path={urlLinks.home}
          render={props => (
            <Friends {...props} friends={this.state.friends} links={urlLinks} />
          )}
        />

        <Route
          exact
          path={urlLinks.friend}
          render={props => <Friend {...props} friends={this.state.friends} />}
        />

        <Route
          exact
          path={`${urlLinks.friend}/:id`}
          render={props => (
            <DisplayFriend {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
