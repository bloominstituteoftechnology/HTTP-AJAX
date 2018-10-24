import axios from 'axios';
import React from 'react';

export default class FriendList extends React.Component {
    constructor() {
      super();
       this.state = {
        friends: []
      }
    }
    componentDidMount() {
      axios.get('http://localhost:5000/friends')
           .then(response => {this.setState({friends: response.data})})
           .catch(err => console.log(err));
    }

    render() {
      return (
        <div>
          <h1>Friends</h1>
          {this.state.friends.map(x => {
          return  (
            <div key={x.id}>
              <h2>{x.name}</h2>
              <h2>Age: {x.age}</h2>
              <h2>Email: {x.email}</h2>
            </div>
          )
          })}
        </div>
      );
    }
  }