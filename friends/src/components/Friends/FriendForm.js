import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FriendForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: '',
      friend: {
        name: '',
        age: 0,
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
    if (this.props.formType === 'update') {
      this.props.onSubmitFriend(this.state.id, this.state.friend);
    } else {
      this.props.onSubmitFriend(this.state.friend);
    }
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
        let friend = this.props.friends.slice();
        friend = friend.filter(item => item.id === id);
        if (friend[0]) {
          this.setState({ friend: {
            name: friend[0].name,
            age: friend[0].age,
            email: friend[0].email
          }});
        }
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
        <input name="name" type="text" onChange={this.onChange} value={this.state.friend.name} />
        <label htmlFor="age">Age</label>
        <input name="age" type="number" onChange={this.onChange} value={this.state.friend.age} />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" onChange={this.onChange} value={this.state.friend.email} />
        <button onClick={this.onSubmit}><div>{this.state.buttonText}</div></button>
        <Link to="/">
          <button><div>Cancel</div></button>
        </Link>
      </form>
    )
  }

}

export default FriendForm;
