import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      newName: '',
      newAge: 0,
      newEmail: ''
    }
  }

  changeInput = (e) => {
    this.setState( { [e.target.id]: e.target.value} )
  }

  render() {
    return(
      <form>
        <h2>Add A Friend</h2>
        <span> Name: </span>
        <input 
          id="newName" 
          placeholder="Name" 
          value={this.state.newName} 
          onChange={this.changeInput} />
        <span> Age: </span>
        <input 
          id="newAge" 
          placeholder="Age" 
          value={this.state.newAge}
          type="number" 
          onChange={this.changeInput} />
        <span> Email: </span>
        <input 
          id="newEmail" 
          placeholder="Email" 
          value={this.state.newEmail}  
          onChange={this.changeInput} />
        <button>Submit</button>
      </form>
    );
  }
}

FriendForm.propTypes = {

}