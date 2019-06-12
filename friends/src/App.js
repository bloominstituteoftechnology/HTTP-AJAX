import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      errorMessage: "",
      newFriendName: "",
      newFriendAge: null,
      newFriendEmail: "",
      spinner: false
    };
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch("http://localhost:5000/friends")
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        this.setState({ friends: parsedData });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  }

  changeNewFriendName = (event) => {
    this.setState( {newFriendName: event.target.value} )
  }

  changeNewFriendAge = (event) => {
    this.setState( {newFriendAge: event.target.value} )
  }

  changeNewFriendEmail = (event) => {
    this.setState( {newFriendEmail: event.target.value} )
  }

  submitFriend = () => {
    console.log("placeholder");
  }

  render() {
    return (
      <div className="App">
        <h1>All your few friends:</h1>
        {this.state.errorMessage && <div> Data did not fetch! </div>}
        {this.state.spinner && <div> Data is fetching... </div>}
        <div>
        {this.state.friends.map(friend => (
          <div className="contentDiv">
            <span>Name: {friend.name}</span> <span>Age: {friend.age}</span> <span>Email: {friend.email}</span>
          </div>
        ))}
        </div>
        <br/>
        <form onSubmit={this.submitFriend} >
          <input onChange={this.changeNewFriendName} value={this.state.newFriendName} placeholder="Name" type="text" />
          <input onChange={this.changeNewFriendAge} value={this.state.newFriendAge} placeholder="Age" type="number" />
          <input onChange={this.changeNewFriendEmail} value={this.state.changeNewFriendEmail} placeholder="Email" type="text" />
          <input type="submit" value="Add new friend" />
        </form>
      </div>
    );
  }
}

export default App;
