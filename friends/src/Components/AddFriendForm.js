import React from "react";
import axios from "axios";
import LinkButton from "./LinkButton";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  numberHandler = e => {
    if (isNaN(e.target.value)) {
      this.setState({ [e.target.name]: 0 });
    } else {
      this.setState({
        [e.target.name]: Number(e.target.value)
      });
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.name === "" ||
      this.state.age === "" ||
      this.state.email === 0
    )
      return null;
    else {
      axios
        .post("http://localhost:5000/friends", this.state)
        .then(response => {
          console.log(response);
          this.props.history.push("/");
          this.props.refresh();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="wrapper">
        <form name="add-friend" onSubmit={this.submitHandler}>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <br />
          Age:{" "}
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.numberHandler}
          />
          <br />
          Email:{" "}
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
        <LinkButton to="/">Home</LinkButton>
      </div>
    );
  }
}

export default AddFriendForm;
