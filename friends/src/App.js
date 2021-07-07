import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: "",
      },
      editingId: null,
      activeFriend: null,
      isEditing: false
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ friends: data });
  }

  getItemById = id => {
    axios
      .get(`http://localhost:5000/${id}`)
      .then(res => this.setState({ activeFriend: res.data }))
      .catch(err => console.log(err));
  };

  changeHandler = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  }

  // handleSubmitFriend = () => {
  //   const newFriend = {
  //     name: this.state.name,
  //     age: this.state.age,
  //     email: this.state.email,
  //   }


    
  // }

  addNewItem = () => {
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({ friends: response.data });
        //         this.props.history.push('/item-list');
      })
      .catch(error => console.log(error));
  };

  deleteItem = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ items: response.data });
        // this.props.history.push('/item-list');
      })
      .catch(error => console.log(error));
  };

  updateItem = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.friend
      )
      .then(response => {
        this.setState({
          items: response.data,
          editingId: null,
          isEditing: false,
          friend: "blankItem"
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <div>
          {/* <Route path='/' render = {(props) => {<FriendsList />}} */}
          <FriendsList
          friendly = {this.state.friends}
          getItemById={this.getItemById}
          />
          <FriendsForm
          addNewItem = {this.addNewItem}
          changeHandler = {this.changeHandler}
          friend = {this.state.friend}
          isEditing = {this.state.isEditing}
          updateItem = {this.updateItem}          
          />
        </div>
      </div>
    );
  }
}

export default App;
