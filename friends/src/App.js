import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      inputName: "",
      inputAge: "",
      inputEmail: "",
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends/')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  editFriend = (e, id) => {
    e.preventDefault();
    alert(`editFriend Called. Id value is ${id}`);
    let oldFriend = {
      name: this.state.inputName,
      age: this.state.inputAge,
      email: this.state.inputEmail,
    }

    axios.put(`http://localhost:5000/friends/${id}`, oldFriend)
      .then(data => {
        console.log("PUT:", data);
        return data;
      })
      .then(data => this.setState({ 
        friends: data.data,
        inputName: "",
        inputAge: "",
        inputEmail: "" }))
      .catch(err => console.log(err));
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  postNewFriend = (e) => {
    e.preventDefault();
    let newFriend = {
      name: this.state.inputName,
      age: this.state.inputAge,
      email: this.state.inputEmail,
    }
    
    axios.post('http://localhost:5000/friends/', newFriend)
      .then(data => this.setState({ 
        friends: data.data,
        inputName: "",
        inputAge: "",
        inputEmail: "" }))
      .catch(err => console.log(err));
  }

  updateDataText = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  renderFriendsList = () => {
    return this.state.friends.map((e, i) => {
      return <FriendCard 
        name={e.name} 
        age={e.age} 
        mail={e.email}
        id={e.id} 
        key={e.id}
        delete={this.deleteFriend} 
      />
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List App</h1>
        <h5>The Friends List That Doesn't Spy On You</h5>
        <Link to="/update/add/new">
          <Button className="btn btn-primary mb-2">Add Friend</Button>
        </Link>
        <Route path="/update/:operation/:id" render={(props) => <AddFriend  
          input={this.updateDataText}
          submit={this.postNewFriend} 
          edit={this.editFriend}
          name={this.state.inputName} 
          age={this.state.inputAge} 
          email={this.state.inputEmail} 
          {...props} />
        } />
        <Route exact path="/" render={this.renderFriendsList} />
        {/* {this.state.friends.map((e, i) => {
          return <FriendCard 
            name={e.name} 
            age={e.age} 
            mail={e.email}
            id={e.id} 
            key={e.id}
            delete={this.deleteFriend} 
          />
        })} */}
      </div>
    );
  }
}

export default App;