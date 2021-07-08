import React, { Component } from 'react';
import './App.css';
import './Friend.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friend: {
            id: this.props.id,
            name: this.props.name,
            age: this.props.age,
            email: this.props.email
        }
      }
    }

    handleDelete = event => {
      console.log('friendprops', this.props.friend)
      event.preventDefault();
      // const { name, age, email } = this.state;
      axios.delete('http://localhost:5000/friends/:id',  this.state.friend)

          // .then( (response) => {
          // this.setState({ friend: response.data, name: '', age: '', email: '' })
          .then((response) => {
            console.log('state', this.state.friend)
              console.log('data', response.data)
            this.props.deleteFriendHandler(this.props.friend)
            console.log('finaldata', response.data)
            console.log('stateAfter', this.state.friend)
            // })
          // this.setState({ friend: this.props.friend.id, id: '', name: '', age: '', email: '' })
          console.log('REALFINAL', this.props.friend)
      })
      .catch(error => {
          console.error('Server Error', error)
          });
      }

    render() {
        return (
            <div className="friends">
                <li key={this.props.id} className="friend">
                    <p> Name: {this.props.friend.name}</p>
                    <p> Age: {this.props.friend.age}</p>
                    <p> Email: {this.props.friend.email}</p>
              <button onClick={this.handleDelete}>Delete</button>
              <button>Update</button>
                </li>

            </div>
        )
    }
}



export default Friend;