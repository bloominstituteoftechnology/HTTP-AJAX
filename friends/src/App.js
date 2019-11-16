import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendForm from './components/FriendForm';
import Friends from './components/Friends';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { Navbar } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/friends';
    this.state = {
      name: '',
      age: '',
      email: '',
      friendList: [],
    };
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
    this.handleNewFriend = this.handleNewFriend.bind(this);
  }

  componentDidMount() {
    const friendRequest = axios.get(this.url);
    friendRequest.then(response => {
      this.setState({ friendList: response.data });
    });
  }

  handleInput = e => {
    let fieldName = e.target.name;
    let value = e.target.value;
    if (fieldName === 'age') value = parseInt(value, 10);
    this.setState({ [fieldName]: value });
  };

  handleNewFriend(e) {
    e.preventDefault();
    let { friendList, ...rest } = this.state;
    let context = this;
    let friendRequest = axios.post(this.url, rest);
    friendRequest
      .then(response => {
        context.setState({ friendList: response.data });
        context.props.history.push('/');
      })
      .catch(response => {
        alert('Add friend failed! ' + response);
      });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  handleDeleteFriend(id) {
    axios.delete(`${this.url}/${id}`).then(response => {
      console.log(response);
      this.setState({ friendList: response.data });
    });
  }

  handleFriendUpdate = friend => {
    axios
      .put(`${this.url}/${friend.id}`, friend)
      .then(response => {
        this.setState({ friendList: response.data });
      })
      .catch(response => {
        alert('Save failed: ', response.data);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__header__text">I Have Friends Okay</h1>
          <nav>
            <Navbar>
              <NavLink className="nav-link" exact to="/">
                See Friends
              </NavLink>
              <NavLink className="nav-link" to="/addfriend">
                Add Friends
              </NavLink>
            </Navbar>
          </nav>
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <Friends
              friendList={this.state.friendList}
              handleFriendUpdate={this.handleFriendUpdate}
              handleDeleteFriend={this.handleDeleteFriend}
            />
          )}
        />
        <Route
          exact
          path="/addfriend"
          render={() => (
            <FriendForm
              nameInput={this.state.name}
              ageInput={this.state.age}
              emailInput={this.state.email}
              handleInput={this.handleInput}
              handleFriendForm={this.handleNewFriend}
            />
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(({ history }) => <App history={history} />);

export default AppWithRouter;
