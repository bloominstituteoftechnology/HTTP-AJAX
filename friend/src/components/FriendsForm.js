import React from "react";
import axios from "axios";


class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitNewFriend = () => {
    let newFriend = ({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      
    });
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(() => {
        window.location.reload();
        this.props.history.push("/friends")
      })
      .catch(err => console.log(err));
  };
  goToList = () => {
    this.props.history.push("/friends");
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={e => this.handleInputChange(e)}
        />
        
        <button
          type="button"
          className="btn"
          onClick={this.submitNewFriend}
        >
          New Friend List
        </button>
        <button
          onClick={() => this.goToList()}
          type="button"
          className="btn"
        >
          Friends List
        </button>
      </form>
    );
  }
}


export default FriendsForm;