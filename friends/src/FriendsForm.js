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

  editFriendsHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitFriend = () => {
    const name = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/Friends", name)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.props.handleSetData(response.data);
        this.setState({ name:'', email:'', age:'' });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="friends-form-div">
        <form className="friends-form">
          <input
            type="text"
            name="name"
            onChange={this.editFriendsHandler}
            value={this.state.name}
            placeholder="name..."
          />
          <input
            type="number"
            name="age"
            onChange={this.editFriendsHandler}
            value={this.state.age}
            placeholder="age..."
          />
          <input
            type="text"
            name="email"
            onChange={this.editFriendsHandler}
            value={this.state.email}
            placeholder="email..."
          />
          <button onClick={this.handleSubmitFriend}>Add friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
