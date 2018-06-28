import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        };
    }

    handleSubmitFriend = () => {
      const friend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      };
        axios
        .post('http://localhost:5000/friends', friend)
          .then(response => {
            this.props.handleSetData(response.data);
            this.setState({ name: '', email: '', age: '' })
          })
          .catch(error => console.log(error));
        };


    handleNameChange = event => {
      this.setState({ name: event.target.value });
    };

    handleAgeChange = event => {
      this.setState({ age: event.target.value });
    };

    handleEmailChange = event => {
      this.setState({ email: event.target.value });
    };

    render() {
        return (
            <div className="friends-form">
              <Link to="/">Friend's List</Link>
              <h2>Add Friend</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Friends name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Friends age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Friends email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button onClick={this.handleSubmitFriend}>Save</button>
            </div>
        )
    }
}

export default FriendsForm;
