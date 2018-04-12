import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      modal: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateFriendsList = updatedFriendsList => {
    this.setState({ friends: updatedFriendsList});
  }

  deleteFromFriendsList = friendId => {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmitAddFriend = e => {
    this.toggle();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.updateFriendsList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <br />
          <h5>Click on a field to update it</h5><br />
          <Route exact path="/" render={ () => <FriendsList {...this.state} deleteFromFriendsList={this.deleteFromFriendsList}/>}/>
          <div>
            <Button color="primary" onClick={this.toggle}>Add a Friend!</Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add a Friend!</ModalHeader>
              <ModalBody>
              </ModalBody>
                <AddFriendForm toggle={this.toggle} updateFriendsList={this.updateFriendsList}/>
              <ModalFooter>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
