import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

class Friends extends Component {
  constructor () {
    super ()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => {
        this.setState({ friends: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

//   friendsList = () => {
//     this.state.friends.map((friends) => {
//       return (
//           <ul> 
//             <li key={friends.id}>
//               <h3> { friends.name } </h3>
//               <h4> email: { friends.email } </h4>
//               <h5> age: { friends.age } </h5>
//             </li>
//           </ul>
//     )})
//  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1> Friends List </h1>
        {this.state.friends.map((friends) => {
          return (
            <div key={friends.id}>
              <ul> 
                <li>
                  <h3> { friends.name } </h3>
                  <h4> email: { friends.email } </h4>
                  <h5> age: { friends.age } </h5>
                </li>
              </ul>
            </div>
        )})}
        <Link to={`/friend`}> <Button> Add Friend </Button> </Link>
      </div>
    );
  }
}

export default Friends;
