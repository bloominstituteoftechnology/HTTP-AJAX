import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Table } from "reactstrap";
// import {Route} from 'react-router-dom'

const url = "http://localhost:5000/friends";

const Friends = props => {
  return (
    <Table hover>
    <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
      {props.friends.map((friend, index)=> (



              <tr key={index}>

                <th scope="row">{++index}</th>

                <td>{friend.name}</td>
                <td>{friend.age}</td>
                <td>{friend.email}</td>
              </tr>


      ))}
      </tbody>
    </Table>
  );
};

{/* <div className="friendlies">
  {props.friends.map(friend => (
    <div className="friend-sheet">
      <p>
        <div> Name: {friend.name} </div>
        <div>Age: {friend.age}</div>
        <div>Email: {friend.email}</div>
      </p>
    </div>
  ))}
</div>; */}

// const addAFriend = props => {
//   return(
//     <form action="">

//     </form>
//   )
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      Name: "",
      Age: [],
      Email: ""
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error("Server Error");
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Friends</h1>
        </header>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
