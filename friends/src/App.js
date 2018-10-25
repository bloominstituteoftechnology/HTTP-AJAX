import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import FriendPage from './components/FriendPage';
import Home from './components/Home';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: '',
      },
    }
  }

  //http://localhost:5000/friends
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
        this.setState({ friends: response.data })
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
     console.log(id)
    .then(response => this.setState({ friends: response.data }));
   
  }

  // handleUpdateFriend = id => {
  //   return () => {
  //     // dan creates a new closure for both Delete and Update functions
  //   }
  // }

  // new way NON-CLOSURE WAY (Dan't epiphany)

  // handleUpdateFriend = (id, name, email, age) => {

  // }

  // C R U D
  // Post = Ccreate
  // Put = Update

  //post getItemById axios POST here? 
  // POST PUT DELETE are 'user' interaction, will be in a button or something
  
// Post - (url, body)     body is an object
// Get - (url)
// Put - (url/:id, id, body)
// Delete - (url/:id)
// Patch ??

// const body = {name: 'chris', age: 22}       note: just setting long object, many key-value  pairs into a variable

// axios.post(url, body)


  render() {
    return (
      <div className="App">
        <ul className="navbar">
            <li>
              <NavLink to="/">
                <h1>Home</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/friendslist">
              <h1>Friends </h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-friend">
                <h1>Add New Friends</h1>
              </NavLink>
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
          /> )}
          />

     
          {/* <div>
            {this.state.friends.map(friend => {
              return <Friend name={friend.name} id={friend.id} age={friend.age} email={friend.email}/>
            })}
          </div> */}


        <Route
            path="/add-friend"
            render={props => (
            <FriendForm 
              {...props} 
              handleAddNewFriend={this.handleAddNewFriend}
              handleChange={this.handleChange} 
              newfriend={this.state.friend}

              />
            )}
        />
      </div>
    );
  }
}

export default App;
