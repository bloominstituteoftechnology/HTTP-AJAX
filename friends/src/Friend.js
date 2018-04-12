import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

  // componentDidMount() {
  //   // change this line to grab the id passed on the URL
  //   const id = this.props.friend.match.params.id;
  //   axios
  //     .get(`http://localhost:5000/friends/${id}`)
  //     .then(response => this.setState(() => ({ friend: response.data })))
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

    handleDelete = event => {
      event.preventDefault();
      const id = this.props.friend.id;
      axios.delete('http://localhost:5000/friends/${id}', {
        params: { friend: "id"}
        // id: 'i'
        // headers: {
        //   'id': id,
        //   'Content-Type': 'application/json'
        // }
      })
        .then((res) => {
          console.log('works', res);
          console.log('id', res.data)
          this.setState({ friend: null }) 
        })
          .catch(error => {
            console.error('Server Error', error)
          });
      }
  // const instance = axios.create({
  //   baseURL: 'https://some-domain.com/api/',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' }
  // });
    //     axios.delete('http://localhost:5000/friends/:id', {params: {
    //       'id': friend.id}}
    //     ).then((response) => { 
    //       console.log('works', response);
    //       console.log('id', friend);
    //     })
    //     .catch(error => {
    //       console.error('Server Error', error)
    //   });
    // }

    render() {
        return (
            <div>
                <li key={this.props.id} className="friend">
                    <div className="friend-name">{`Name: ${this.props.friend.name}`}</div>
                    <div className="friend-age">{`Age: ${this.props.friend.age}`}</div>
                    <div className="friend-email">{`Email: ${this.props.friend.email}`}</div>
                </li>
                <button onClick={this.handleDelete}>Delete</button>
                <button>Update</button>
            </div>
        )
    }
}



export default Friend;