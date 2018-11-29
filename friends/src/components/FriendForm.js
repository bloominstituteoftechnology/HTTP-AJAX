import React from 'react';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    location: '',
    email: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClick = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      age: Number(this.state.age) || 0,
      // id: Math.max(...(this.state.friends.map(friend => friend.id))) + 1,
    }

    this.props.addFriend(friend);
    this.setState({
      name: '',
      age: '',
      location: '',
      email: '',
    })
  }

  onCancel = e => {
    e.preventDefault();
    Object.values(this.state).every(item => !item) ?
    this.props.history.push('/'):
    this.setState({
      name: '',
      age: '',
      location: '',
      email: '',
    });
  }

  render() {
    const { name, age, location, email } = this.state;
    return (
    <div  className="ui segment">
      <form style={{padding: '20px'}} className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" value={name} onChange={this.onChange} name="name" placeholder="Enter name" />
        </div>
        <div className="field">
          <label>Age</label>
          <input type="text" value={age} onChange={this.onChange} name="age" placeholder="Enter age" />
        </div>
        <div className="field">
          <label>Location</label>
          <input type="text" value={location} onChange={this.onChange} name="location" placeholder="Enter location" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" value={email} onChange={this.onChange} name="email" placeholder="Enter email" />
        </div>
        <button
          className="ui button"
          onClick={this.onCancel}>
          {Object.values(this.state).every(item => !item) ? 'Cancel' : 'Clear'}
        </button>
        <button className="ui primary button" onClick={this.onClick}>Add Friend</button>
      </form>
    </div>
    );
  }
}
 
export default FriendForm;