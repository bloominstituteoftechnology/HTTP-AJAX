import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend';


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      updateCard: [],
    }

  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(response => {
          this.setState(() => ({ friends: response.data }));
        })
        .catch(err => {
          console.log("Error: ", err)
        })
  }; 

  handleSubmit = (newHomie) => {
    axios
      .post(`http://localhost:5000/friends`,{
        name: newHomie.name,
        age: newHomie.age,
        email: newHomie.email,
        city: newHomie.city
      })
        .then(response => {
          console.log("post response:",response)
          const newHomies = response.data;
          this.setState({
              friends: newHomies
          })
        })
        .catch(err => {
          console.log("post err:",err)
        }) 
  }

  handleScrap= (friendID) => {
    console.log(friendID)
    axios
      .delete(`http://localhost:5000/friends/${friendID}`)
        .then(response => {
          console.log("delete response:", response)
          this.setState({ friends: response.data })
        })
        .catch(err => {
          console.log("post err:",err)
        }) 
  }

  handleAllUpdates = (friendID) => {
    this.setState({updateCard: friendID })
  }

  handleEdits = (friendID) => {
    console.log("edit Submit id:", friendID)
    axios
      .put(`http://localhost:5000/friends/${friendID.id}`,{
        name: friendID.name,
        age: friendID.age,
        email: friendID.email,
        city: friendID.city,
      })
        .then(response => {
          console.log("edit response:", response)
          this.setState({ friends: response.data })
        })
        .catch(err => {
          console.log("edit err:",err)
        })
  }

  render() {
    return(
      <div>
        <div>

        <Route exact path="/"render={() => <FriendCard homiePassIn={this.state.friends} handleScrap={this.handleScrap} handleAllUpdates={this.handleAllUpdates}/> }/>
        <Route path="/add"render={(props) => <AddFriend {...props} handleSubmits={this.handleSubmit}/> }/>
        <Route path="/edit"render={(props) => <AddFriend {...props} handleSubmits={this.handleEdits} forUpdates={this.state.updateCard}/> }/>
        </div>
        
      </div>
    )
  }
}

export default FriendsList;