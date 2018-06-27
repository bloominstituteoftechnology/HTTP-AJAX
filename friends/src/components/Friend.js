import React from 'react';
import '../App.css';
import EditFriend from './EditFriend';
import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      nameEdit: '',
      ageEdit: '',
      emailEdit: ''
    }
  }

  editHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  toggleEdit = () => {
    this.setState({ showEditForm: !this.state.showEditForm })
  }

  saveEdit = (e) => {
    e.preventDefault();
    const newEdits = {name: this.state.nameEdit, age: this.state.ageEdit,
    email: this.state.email};
    axios
      .put()
  }



    render() {
      return (
        <div>
          <ul>
            <li>Name: {this.props.friend.name}</li>
            <li>Age: {this.props.friend.age}</li>
            <li>Email: {this.props.friend.email}</li>
          </ul>
          {this.state.showEditForm ? (
            <EditFriend editHandler={this.editHandler} saveEdit={this.saveEdit} />
          ) : null}
          <button onClick={this.toggleEdit}>Edit Friend</button>
        </div>
      )
  }
}

export default Friend;
