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
      spinner: false
    };
  }

  componentDidMount() {
    this.setState({ spinner: true });
    debugger;
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

  render() {
    return (
      <div className="App">
        {this.state.errorMessage && <div> Data did not fetch! </div>}
        {this.state.spinner && <div> Data is fetching... </div>}
        {this.state.friends.map(friend => (
          <div>
            Name: {friend.name}, Age: {friend.age}
          </div>
        ))}
        <form>
          <input onchange={this.changeNewFriendName} value={this.state.newFriendName} placeholder="Name" type="text" />
          <input onchange={this.changeNewFriendAge} value={this.state.newFriendAge} placeholder="Age" type="number" />
          <input type="submit" value="Add new friend" />
        </form>
      </div>
    );
  }
}

export default App;
