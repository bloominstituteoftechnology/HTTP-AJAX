import React from 'react';
import '../App.css';
/*import {Link} from 'react-router-dom';*/

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*pageRefresh = () => {
    this.props.handleSubmitFriend;
    console.log('fajiowfj');
  } */


  render() {
  return (
    <div>
      <form className="af-form">
        Name: <input
        type="text"
        placeholder="Name"
        name="friendName"
        value={this.props.name}
        onChange={this.props.handleChange} className="af-input" />
        <br/>
        Age: <input
        type="number"
        placeholder="Age"
        name="friendAge"
        value={this.props.age}
        onChange={this.props.handleChange} className="af-input" />
        <br/>
        Email: <input
        type="text"
        placeholder="Email"
        name="friendEmail"
        value={this.props.email}
        onChange={this.props.handleChange} className="af-input" />
        <button onClick={this.props.handleSubmitFriend}
        className="addFriend-button">Add Friend</button>
      </form>
    </div>
  )
}
}

export default AddFriendForm;
