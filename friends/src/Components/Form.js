import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    let currentFriend = this.props.data.find(
      item => item.id.toString() === this.props.match.params.id
    );
    this.setState({
      name: this.props.edit ? currentFriend.name : "",
      age: this.props.edit ? currentFriend.age : "",
      email: this.props.edit ? currentFriend.email : ""
    });
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  submitHandler = ev => {
    ev.preventDefault();

    if (this.props.edit) {
      this.props.editFriend(this.state, this.props.match.params.id);
    } else {
      this.props.addNewFriend(this.state);
    }
    this.props.history.push("/");
  };

  render() {
    let currentFriend = this.props.data.find(
      item => item.id.toString() === this.props.match.params.id
    );
    return (
      <div className="form-page">
        <h2>
          {this.props.edit
            ? `Edit: ${currentFriend ? currentFriend.name : ""}`
            : "Add New Friend"}
        </h2>
        <form className="form" onSubmit={this.submitHandler}>
          <div className="input-item name-input">
            <label>Name:</label>
            <input
              onChange={this.handleChange}
              type="name"
              name="name"
              value={this.state.name}
              required
            />
          </div>

          <div className="input-item age-input">
            <label>Age:</label>
            <input
              onChange={this.handleChange}
              type="number"
              name="age"
              value={this.state.age}
              required
            />
          </div>

          <div className="input-item email-input">
            <label>Email:</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
              required
            />
          </div>

          <div className="add-btn">
            <button>{this.props.edit ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
