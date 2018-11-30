import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: ""
    };
  }
  componentDidMount() {
    if (this.props.edit) {
      this.setState({
        name: this.props.name,
        age: this.props.age,
        email: this.props.email
      });
    }
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.props.edit) {
      this.props.editFriend(this.state, this.props.id);
    } else {
      this.props.addNewFriend(this.state);
    }
  };
  render() {
    return (
      <div>
        <h1>{this.props.edit ? "Edit Friend" : "Add New friend"}</h1>
        <form onSubmit={this.submitHandler}>
          Name:
          <br />
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
          />
          <br />
          Age:
          <br />
          <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
          />
          <br />
          Email:
          <br />
          <input
            onChange={this.changeHandler}
            type="text"
            name="email"
            value={this.state.email}
          />
          <br />
          <br />
          <input
            type="submit"
            value={this.props.edit ? "Edit Friend" : "Add New friend"}
          />
        </form>
      </div>
    );
  }
}

export default Form;
