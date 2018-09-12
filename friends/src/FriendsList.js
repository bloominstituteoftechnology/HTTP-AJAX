import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from './Form';
import { Route } from 'react-router-dom';

export default class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({friends: response.data})
        })
        .catch(err => console.log(err))
    }
  
  
    componentDidUpdate() {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({friends: response.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Route path="/" component={Form} />
                <Route path='' component={}/>
                    {this.state.friends.map(friend => <Link to={`/${friend.id}`}><div key={friend.id}>{friend.name} is {friend.age} and can be reached at : {friend.email}</div></Link>)}
            </div>
        );
      }
}
