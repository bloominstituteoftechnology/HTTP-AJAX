import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import EditFriend from './components/editFriend';
import NewFriend from './components/newFriend';
import AllFriends from './components/allFriends';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      rev: [],
      name: '',
      // age: null,
      // email: '',
      clicked: [],
      }
  }

  componentDidMount() {
    axios.get(url).then(response => {
      let foo = response.data.reverse()
      this.setState({
        friends: foo
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  click = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submit = event => {
    event.preventDefault();
    console.log('submit');
    axios.post(url, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
    .then( () => {
      axios.get(url).then(response => {
        console.log(response)
         let food = response.data.reverse()
        this.setState({
          friends: food
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    })
    this.setState({
      name: "",
      age: "",
      email: ""
    })
  }

  getFriend(id) {
   let selectedFriend = '';
   this.state.friends.forEach( friend => {
      if (friend.id == id){
        selectedFriend = friend
      }
    });
   return selectedFriend;
  }

  deleteFriend(id) {

  }

  editFriend() {

  }

  render() {
    return (
      <div className="App">

        <div className="left">
          <Link to="/">
            <Route path='/' render={() => { return <h1>Home</h1>}} />
          </Link>
          <Link to="/allFriends">Show all Frieneds</Link>

          <Route path="/allFriends" render={() => {
            return(
              <div>
                <NewFriend  click={this.click} submit={this.submit} data={this} />
                <div className="details">
                  <p>New Friend sample profile</p>
                  <AllFriends data={this.state} />
                </div>
              </div>
            )
          }}
          />

          <Route path="/friend/:id" render={() => {
            return (
              <EditFriend click={this.click} submit={this.editFriend} data={this} />
            )
          }}
          />

          <Route path="/friend/:id" render={() => {
            return <button onClick={this.deleteFriend}>Delete Friend</button>
          }} />

        </div>

        <div className="right">
          <Route path='/allFriends' render={(props) => {
            return this.state.friends.map(friend => {
              return (
                <Link className="friendLink" key={friend.id} to={`/friend/${friend.id}`}>
                  <AllFriends  key={friend.id} name={friend.name} click={this.friendClick} data={friend}>{friend.name}</AllFriends>
                </Link>
              )
            })
          }}
          />

          <Route path="/friend/:id" render={(props) => {
            return (
              <div className="friendFull">
                <AllFriends  data={this.getFriend(props.match.params.id)} {...props} />
              </div>
            )
          }}
          />

        </div>



        </div>


    );
  }
}

export default App;
