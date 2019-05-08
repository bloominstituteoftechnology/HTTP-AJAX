import React from 'react';
import axios from 'axios';

class FriendForm extends Component {
  construcot(props) {
    super(props);
    this.state = {
      friendInput: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  handleChanges = event => {
    this.setState( {
      ...this.state.friendInput,
      [event.target.name]: event.target.value
    })
  }

  postFriend = () => {
    event.preventDefault();
    props.postFriend(this.state.friendInput)
  }


  render() { 
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <input>
          
          </input>
          <input>
          
          </input>
          <input>
          
          </input>
        </form>
      </div>
      );
  }
}
 
export default FriendForm;