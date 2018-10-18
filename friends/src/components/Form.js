import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <button onClick={this.props.updateFriend}>Update Friend</button>
        <input
          onChange={e => this.props.eventHandler(e)}
          type="text"
          placeholder="name"
          name="nameText"
        />
        <input
          onChange={e => this.props.eventHandler(e)}
          type="text"
          placeholder="age"
          name="ageText"
        />
        <input
          onChange={e => this.props.eventHandler(e)}
          type="text"
          placeholder="email"
          name="emailText"
        />
        <button onClick={this.props.saveFriend}>Save Friend</button>
      </form>
    );
  }
}

export default Form;
