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

  toggleEdit = () => {
    this.setState({ showEditForm: !this.state.showEditForm })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value});
  }

  saveEdit = (e) => {
    e.preventDefault();
    const id = this.props.friend.id;
    const newEdits = {};
    if (this.state.nameEdit.length > 0) newEdits.name = this.state.nameEdit;
    if (this.state.ageEdit.length > 0) newEdits.age = this.state.ageEdit;
    if (this.state.emailEdit.length > 0) newEdits.email = this.state.emailEdit;
    axios
      .put(`http://localhost:5000/friends/${id}`, newEdits)
      .then(response => {
        console.log(response.data)
        this.props.setData(response.data);
        this.setState({showEditForm: false, nameEdit: '', ageEdit: '', emailEdit: ''});
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteFriend = () => {
    const id = this.props.friend.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response.data);
        this.props.setData(response.data);
      })
      .catch(err => {
        console.log(err);
      })
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
            <EditFriend editHandler={this.handleChange} saveEdit={this.saveEdit}
            nameValue={this.state.nameEdit} ageValue={this.state.ageEdit}
            emailValue={this.state.emailEdit} />
          ) : null}
          <button onClick={this.toggleEdit}>Edit Friend</button>
          <button onClick={this.deleteFriend}>Delete Friend</button>
        </div>
      )
  }
}

export default Friend;
