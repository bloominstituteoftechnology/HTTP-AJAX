import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
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

  // eventDidUpdate(){
  //   debugger;
  // }

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

  // friendClick = event => {
  //   console.log(event.currentTarget)
  //   this.setState({
  //     clicked: event.currentTarget})
  //   // localStorage.setItem('selected', event.target.value)
  // }

  getFriend(id) {
   let selectedFriend = '';
   this.state.friends.forEach( friend => {
      if (friend.id == id){
        selectedFriend = friend
      }
    });
   console.log(id, selectedFriend, 'getFriend') 
   return selectedFriend;
    
  }


  render() {
    // console.log(this.getFriend(0));
    return (
      <div className="App">
       
        <Link to="/">
          <Route path='/' render={() => { return <h1>Home</h1>}} />
        </Link>

        <Link to="/allFriends">
          Show all Frieneds
        </Link>

        <Route path='/allFriends' render={(props) => {
          return this.state.friends.map(friend => {
            return (
              <Link key={friend.id} to={`/friend/${friend.id}`}>
                <AllFriends key={friend.id} name={friend.name} click={this.friendClick} data={friend}>{friend.name}</AllFriends>
              </Link> 
            )
          })
        }} /> 
        
        <Route 
          path="/friend/:id"
          render={(props) => {
          // console.log('this.getFriends(props.id)');
           return <AllFriends data={this.getFriend(props.match.params.id)} {...props} />
          }}
        /> 
        
        <div className="form">
            <NewFriend click={this.click} submit={this.submit} data={this}/>
        </div>
        
        <div className="sub-app">

          
          
          {/* <div className="component">
            {this.state.friends.map(friend => {
              return (
                <Link key={friend.id} to={`/friend/${friend.id}`}>
                  <AllFriends key={friend.id} name={friend.name} click={this.friendClick} data={friend}>{friend.name}</AllFriends>
                </Link> 
              )
              
             
              
            })}
          </div> */}

          {/* <div className="details">
          <p>New Friend sample profile</p>
           <Friend data={this.state} />
          </div> */}

        </div>  
     
      </div>
    );
  }
}

export default App;
