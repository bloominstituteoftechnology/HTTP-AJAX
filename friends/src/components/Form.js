import React, { Component } from 'react';
import axios from 'axios';




class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
        id: 0
      }
    }


    componentDidMount() {
        this.setState({friends: this.props.friends})
    }


    handlenewFriendChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmitNewFriend = () => {
        axios
            .post(`http://localhost:5000/friends`, this.state)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                })
        this.setState({id: '', name: '', age: '', email: '' });
        window.location.reload();
    };

    handleDeleteFriend = () => {
        axios
            .delete(`http://localhost:5000/friends/${this.state.id}`)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                })

        this.setState({id: '', name: '', age: '', email: '' });
        window.location.reload();
    };

  render() {
        
    return (
      <div>
      <input className='idInput'
            id="id"
            value={this.state.id}
            onChange={this.handlenewFriendChange}
            placeholder='Add id...'
        />
        <input className='nameInput'
            id="name"
            value={this.state.name}
            onChange={this.handlenewFriendChange}
            placeholder='Add Name...'
        />
        <input className='ageInput'
            id='age'
            value={this.state.age}
            onChange={this.handlenewFriendChange}
            placeholder='Add Age...'
        />
        <input className='emailInput'
            id='email'
            value={this.state.email}
            onChange={this.handlenewFriendChange}
            placeholder='Add Email...'
        />
        <button onClick={this.handleSubmitNewFriend}>Submit New Friend</button>
        <button onClick={this.handleDeleteFriend}>Delete Friend</button> 
      </div>
    );
  }
}

export default Form;