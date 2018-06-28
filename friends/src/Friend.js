import React from "react";
import axios from "axios";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
      id:props.friend.id
    };
  }

//   componentDidMount() {
//       // change this line to grab the id passed on the URL
//       const id = this.props.match.params.id;
//       this.fetchFriend(id);
//     }

//     fetchFriend = id => {
//       axios
//         .get(`http://localhost:5000/friends/${id}`)
//         .then(response => {
//           this.setState(() => ({ friend: response.data }));
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     };
  
  handleDelete = id => {
    // delete request to the server with the id.
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
          this.props.handleSetData(response.data)
        this.setState({ name:'', email:'', age:'' });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {


    return (
      <div>
        <h2>Name:{this.state.name}</h2>
        <p>Age: {this.state.age}</p>
        <p>Email:{this.state.email}</p>
        <button onClick={() => this.handleDelete(`${this.state.id}`)}>Delete</button>
      </div>
    );
  }
}

export default Friend;
