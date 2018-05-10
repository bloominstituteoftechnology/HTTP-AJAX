import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
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

  updateEditText = ({ name, age, email } = {}, operation) => {
    // console.log("updateEditText obj", obj);
    console.log("updateEditText operation", operation);
    if (operation === "edit") {
      this.setState({ inputName: name, inputAge: age, inputEmail: email });
    } else {
      this.setState({ inputName: "", inputAge: "", inputEmail: "" });
    }
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
        <h1><del>Robot</del> Totally Human Friends List</h1>
        <h5>Everyone here is a real human with real human emotions and sensory peceptive inputs.</h5>
        
        <Route path="/update/:operation/:id" render={(props) => {
          const toUpdateId = props.match.params.id;
          let friendObj;
          for (let friend of this.state.friends) {
            if (friend.id === Number(toUpdateId)) {
              friendObj = friend;
              break;
            }
          }
          console.log("Friend Obj:",friendObj);

          return ( <AddFriend  
            input={this.updateDataText}
            submit={this.postNewFriend} 
            edit={this.editFriend}
            editValue={this.updateEditText}
            name={this.state.inputName} 
            age={this.state.inputAge} 
            email={this.state.inputEmail}
            friend={friendObj} 
            {...props} />
          )}} />
        <Route exact path="/" render={() => {
          return (
            <Link to="/update/add/new">
              <button className="center mb3">Add Friend</button>
            </Link> 
          );
        }} />
        <div className="friends-list flex flex-wrap justify-center">
          <Route exact path="/" render={this.renderFriendsList} />
        </div>
      </div>
    );
  }
}

export default App;