import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default class FriendList extends Component {
  constructor() {
    super();
    this.state ={
      lists: [],
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() =>({lists: response.data}));
    })
    .catch(error => {
      console.error('Server Errpr', error);
    });
  }

  render() {
    return(
      <div className='friend-list'>
        {this.state.lists.map((f, i) => (
          <Friend key={i} friend={f} />
        ))}
      </div>
    );
  }
}

FriendList.propTypes = {

}