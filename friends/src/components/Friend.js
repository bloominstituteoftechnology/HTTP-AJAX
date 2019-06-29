import React from "react";
import axios from "axios";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFriend: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        return response.data.find(friend => `${friend.id}` === id);
      })
      .then(friend =>
        this.setState(() => ({
          selectedFriend: friend
        }))
      )
      .catch(error => console.error(error));
      console.log("selected friend is " + this.state.selectedFriend);
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchFriend(newProps.match.params.id);
    }
  }

  render() {
    if (!this.state.selectedFriend) {
      return <div>Loading friend information...</div>;
    }
    console.log("params id is " + this.props.match.params.id);
    const { name, age, email } = this.state.selectedFriend;
    return (
      <div className="friend-display-card">
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default Friend;