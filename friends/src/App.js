import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],

      name: "",
      email: "",
      age: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  addFriend = e => {
    const newFriend={name:this.state.name, email:this.state.email, age:this.state.age};
    axios.post(`http://localhost:5000/friends`, newFriend).then(() =>
      this.setState({
        
          name: "",
          email: "",
          age: ""
        
      })
    );
  };

  changeHandler = e => {
    let targetName = e.target.name;
    this.setState({ [targetName]: e.target.value } );
  };

  render() {
    return (
      <div className="App">
        <h1>Lambda Friends</h1>
        <FriendsList friends={this.state.friends} />
        <FriendForm
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
          newFriend={{name:this.state.name, email:this.state.email, age:this.state.age}}
        />
      </div>
    );
  }
}

export default App;
