import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';
import FriendCard from './components/FriendCard';

const blankFormValues = {
  name: '',
  age: null,
  email: '',
  quote: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: null,
        email: '',
        quote: '',
      },
      isUpdating: false,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log('response.data', response.data);
        this.setState({
          friends: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postNewFriend = (e) => {
    axios
    .post("http://localhost:5000/friends", {
      name: this.state.friend.name,
      age: parseInt(this.state.friend.age, 10),
      email: this.state.friend.email,
      quote: this.state.friend.quote

    })
    .then((response) => this.setState({ friends: response.data }))
    .catch(err => console.log(err))

  }
  goToUpdatePage = (event, id) => {
    event.preventDefault();
    const friendToUpdate = this.state.friends.find(friend => friend.id == id);
    this.setState({
      isUpdating: true,
      friend: friendToUpdate }, () => this.props.history.push('/addFriend'));
}

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
      [e.target.name]: e.target.value,
    }
  });
  }

  handleUpdate = friendId => {
    axios.put(`http://localhost:5000/friends/${friendId}`, this.state.friend)
    .then(response => {
      this.setState({
        friends: response.data
      });
      this.props.history.push(`/friends/${friendId}`)
    })
  }

  handleDelete = friendId => {
    return axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => this.setState({ friends: response.data }))
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map}
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/addFriend">Add a new friend</Link>
        <Route
        exact path="/"
        render={() => <h1>Welcome to the Friend List!</h1>}
        />
        <Route
        exact
        path="/friends"
        render={(props) => <FriendsList {...props}
        friends={this.state.friends}/>}
        />
        <Route
        path="/addFriend"
        render={(props) => <FriendForm {...props}
        handleChange={this.handleChange}
        postNewFriend={this.postNewFriend}
        friend={this.state.friend}
        isUpdating={this.state.isUpdating}/>}
        />
        <Route
        exact path="/friends/:friendId"
        render={(props) => <FriendCard {...props}
        friends={this.state.friends}
        friend={this.state.friend}
        handleDelete={this.handleDelete}
        goToUpdatePage={this.goToUpdatePage} />}
        />
      </div>
    );
  }
}

export default App;
