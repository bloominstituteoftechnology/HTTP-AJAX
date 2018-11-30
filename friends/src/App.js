import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Components/FriendsList.js'
import FriendForm from './Components/FriendForm.js'
import FriendsCard from './Components/FriendCard.js'
import {Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      selectedFriend: false,
      inputName : '',
      inputAge : '',
      inputEmail : '',
    }
  }

  selectFriend = (friend) => {
    console.log(friend, 'in here');
    this.setState({selectedFriend: friend})
  }

  // componentDidUpdate() {
  //   this.setState({
  //     selectedFriend: false,
  //   })
  // }

  updateSelected = () => {
    this.setState({
      selectedFriend: false,
    })
  }

  savingState = (res) => {
    this.setState({
      friends: res.data,
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        console.log(res.data);
        this.savingState(res)
      })
      .catch(err => {
        console.log('ERR')
      })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addFriend = (e) => {
    e.preventDefault();
    const friend = {
      name: this.state.inputName,
      email: this.state.inputEmail,
      age: Number(this.state.inputAge) || 0,
      //id: Math.max(...(this.state.friends.map(friend => friend.id))) + 1,
    }

    axios
      .post(
        'http://localhost:5000/friends'
        , friend)
      .then(res => (
        this.setState({
          friends: res.data,
          inputName: '',
          inputAge: '',
          inputEmail: '',
        })
      ))
      .catch(err => console.log(err))
  }

  deleteFriend = (e , id) => {
    e.stopPropagation()
    axios
      .delete(
        `http://localhost:5000/friends/${id}`
        )
      .then(res => {
        this.savingState(res);
        this.updateSelected();
      })
      .catch(err => console.log(err))
  }

  updateFriend = (e, id) => {
    e.preventDefault();
    console.log('update friend', id)
    axios
      .put(`http://localhost:5000/friends/${id}`,{
        name: this.state.inputName,
        age: this.state.inputAge,
        email: this.state.inputEmail,
      })
      .then(res => this.setState({friends: res.data, inputName: '', inputAge: '', inputEmail: ''}))
      .catch(err => console.log(err))
  }

  render() {
    console.log('rediner')
    return (
      
      <div className="App">
        
        {/* <FriendForm 
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          isUpdate={this.state.selectedFriend}
          inputName={this.state.inputName} 
          inputAge={this.state.inputAge} 
          handleInputChange={this.handleInputChange}
          inputEmail={this.state.inputEmail} /> */}

        <Route path={`/`} render={ props => {
          console.log('route friendlist')
          return (
            <FriendsList 
              {...props}
              friends={this.state.friends}
              selectFriend={this.selectFriend}
              deleteFriend={this.deleteFriend}
              
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
              isUpdate={this.state.selectedFriend}
              inputName={this.state.inputName} 
              inputAge={this.state.inputAge} 
              handleInputChange={this.handleInputChange}
              inputEmail={this.state.inputEmail}/>
          )
        }}/>

        {/* <Route path={`/friend/:id`} render={ props => {
          return (
            <FriendsCard
              {...props}
              friend={this.state.selectedFriend}
              deleteFriend={this.deleteFriend} />
          )
        }}/> */}
      </div>
    );
  }
}

export default App;
