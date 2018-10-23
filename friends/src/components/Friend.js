import React, { Component } from 'react';
import axios from 'axios';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null,
        }
    }
    
    componentDidMount() {
        // change this line to grab the id passed on the URL
        const id = this.props.match.params.id;
        this.fetchFriend(id);
      }

      fetchFriend = id => {
        axios
          .get(`http://localhost:5000/friends/${id}`)
          .then(response => {
            this.setState(() => ({ friend: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };

    render() {
        if (!this.state.friend) {
            return <div>Loading friend information...</div>;
          }

        return (
            <div>
                <h1>{this.state.friend.name}</h1>
                <h3>{this.state.friend.email}</h3>
                <p>{this.state.friend.name} is <strong>{this.state.friend.age}</strong> years old.</p>
            </div>
        )
    }
}