import React, { Component } from 'react';
import axios from 'axios';

class FriendsForm extends Component {
  

    state = {
      friends: [],
      newFriend: {
        id: '',
        name: '',
        age: '',
        email: '',
      },

    }
    updateFriend = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
    }

    addFriend = (event) => {
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
      axios
        .post('http://localhost:5000/friends', newFriend)

      this.setState({
        name: '',
        age: '',
        email: '',
      })
  }
    render = () => {
      return (
        <ul className="friends_form">

          <form type='submit' onSubmit={this.addFriend}>
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.updateFriend} />
          </form>

          
      </ul>
      )
    }
    componentDidMount() {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friends: response.data })
        })
        .catch(error => {
          console.log('error', error);
        });
    }
}
  export default FriendsForm;