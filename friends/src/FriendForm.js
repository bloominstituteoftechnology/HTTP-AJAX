import React from 'react';

class FriendForm extends React.Component {
  state = {
    name: 'joe',
    age: '',
    email: '',
  };

  render() {
    return (
      <form>
        <label>Name</label>
        <input type="text" value={this.state.name} onChange={this.handleInputChange} />

        <label>Age</label>
        <input type="number" />

        <label>Email</label>
        <input type="email" />

        <button type="submit">Save Friend</button>
        </form>
    );
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({ name: event.target.value })
  }

}

export default FriendForm;
