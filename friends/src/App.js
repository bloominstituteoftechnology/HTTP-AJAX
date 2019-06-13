import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import Form from './components/Form'
import Friend from './components/Friend'
import FriendList from './components/Friendlist'
import UpdateForm from './components/UpdateForm'


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      activeItem: null,
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    //1. invoke .get
    //2. pass in the server url - base url + endpoint
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createFriend = ()=> {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newFriend)
    .then(res => {
      this.setState({ friends: [...this.state.friends, newFriend]
      });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  
    // this.setState ({
    //   friends: [...this.state.friends, newFriend]
    // })

  }

  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

getItemById = id => {
  axios
    .get(`http://localhost:3333/itemById/${id}`)
    .then(res => this.setState({ activeItem: res.data }))
    .catch(err => console.log(err));
};

deleteItem = (e, id) => {
  e.preventDefault();
  console.log('now in deleteItem in App');
  axios
    .delete(`http://localhost:3333/items/${id}`)
    .then(res => {
      console.log('Data is back, now set state and reroute', res.data);
      this.setState({
        items: res.data
      });
      this.props.history.push('/item-list');
    })
    .catch(err => {
      console.log(err);
    });
};

updateItem = () => {
  axios
    .put(
      `http://localhost:3333/items/${this.state.editingId}`,
      this.state.item
    )
    .then(response => {
      this.setState({
        items: response.data,
        editingId: null,
        isEditing: false,
        // item: blankItem
      });
    })
    .catch(error => console.log(error));
};


  render() {
    console.log(this.state)
    return (
      <div className="App">
      {/* <Form  handleChanges={this.handleChanges} createFriend={this.createFriend}/> */}
      <div>
        <Route
        exact
        path="/"
        render={props=><FriendList 
          {...props} 
          friends={this.state.friends}
          getItemById={this.getItemById}/> }
          />

        <Route
        path="/:friendId"
        render={props=><Friend 
          {...props} 
          friends={this.state.friends}
          item={this.state.activeItem}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          /> }
        />

        <Route
          path="/update-form"
          render={props => (
            <UpdateForm
            exact
              {...props}
              activeItem={this.state.activeItem}
              addItem={this.addItem}
              updateItem={this.updateItem}
          />)}
          />

    
      </div>
      </div>
    );
  }
}

export default App;
