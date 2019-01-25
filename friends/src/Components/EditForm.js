import React from "react";
import axios from "axios";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      age: props.age,
      email: props.email
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  numberHandler = e => {
    if (isNaN(e.target.value)) {
      this.setState({ [e.target.name]: 0 });
    } else {
      this.setState({
        [e.target.name]: Number(e.target.value)
      });
    }
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
        .put(`http://localhost:5000/friends/${this.state.id}`, this.state)
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
      <div className="edit-form">
        <form onSubmit={this.submitHandler}>
          Name:{" "}
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.changeHandler}
          />
          Age:{" "}
          <input
            type="text"
            value={this.state.age}
            name="age"
            onChange={this.numberHandler}
          />
          Email:{" "}
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditForm;
