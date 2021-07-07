import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount() {
    this.deleteFriend(this.props.match.params.id);
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };


  render() {
      console.log(this.state.friend)
    if (!this.state.friend) {
      return <div>Loading friend information...</div>;
    }



    return (
        <div>
          <div className="friend-director">
            Congratulations! You now have one less friend!
          </div>

         
          <Link to={`/`}>Click Here to Return</Link>
          </div>
    );
  }
}