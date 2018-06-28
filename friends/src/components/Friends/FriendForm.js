import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FriendForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: '',
      friend: {
        name: '',
        age: undefined,
        email: ''
      }, 
      id: undefined
    };
  }

  onChange = e => {
    console.log(this.state.friend);
    const friendVals = this.state.friend;
    friendVals[e.target.name] = e.target.value;
    this.setState({ friend: friendVals });
  }

  onSubmit = e => {
    e.preventDefault(); 
    this.props.onSubmitFriend(this.state.friend);
  }

  componentDidMount() {
    let id, newText;
    if (this.props.match) {
      id = Number(this.props.match.params.friendID);
      this.setState({id: id});
    }
    console.log('id', id);
    switch(this.props.formType) {
      case 'update':
        newText = 'Update';
        break;
      case 'delete':
        newText = 'Delete';
        break;
      default:
        newText = 'Add';
        break;
    }
    this.setState({buttonText: newText});
  }

  render() {
    return(
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={this.onChange} />
        <label htmlFor="age">Age</label>
        <input name="age" type="number" onChange={this.onChange} />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={this.onChange} />
        <button onClick={this.onSubmit}>{this.state.buttonText}</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    )
  }

}

export default FriendForm;
