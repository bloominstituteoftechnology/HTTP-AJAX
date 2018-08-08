import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';
import AddFriendForm from './Components/AddFriendForm';
import { Route, Link } from 'react-router-dom';
import UpdateFriend from './Components/UpdateFriend';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], loading: true };
  }

  componentDidMount(){
    axios.get(url)
      .then(response => {
        this.setState( {data: response.data, loading: false} )
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateList(newList) {
    this.setState( { data: newList } )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url, {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value
    })
    .then((res) => {
      this.setState({ data: res.data }, ()=> window.location="/friends");
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleUpdate = (id, event) => {
    event.preventDefault();
    axios.put(`${url}/${id}`, {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value
    })
      .then((res) => {
        this.setState({ data: res.data }, () => window.location = "/friends");
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete = (id) => {
    axios.delete(`${url}/${id}`)
      .then((res) => {
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route exact path="/friends" render={(props) => <FriendsList {...props} friends={this.state.data} loading={this.state.loading} handleDelete={this.handleDelete} />} />
        <Route path="/add" render={(props) => <AddFriendForm {...props} handleSubmit={this.handleSubmit} />} />
        <Route path="/friends/:id" render={(props) => <UpdateFriend {...props} handleUpdate={this.handleUpdate} />} />
      </div>
    );
  }
}

const Home = () => {
  return(
    <div className="home">
      <Link to="/friends">
        <button>Friend List</button>
      </Link>
      <Link to="/add">
        <button>Add Friend </button>
      </Link>
    </div>
  );
}

export default App;
