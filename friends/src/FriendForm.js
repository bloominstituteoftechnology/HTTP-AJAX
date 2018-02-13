import React from 'react';
import axios from 'axios';


class FriendForm extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    onChange = event => {
        let { name, value } = event.target;
        if (event.target.type === 'number') {
            value = Number(value);
        }
        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { name, age, email } = this.state;

        axios
            .post('http://localhost:5000/friends', {
                name,
                age,
                email,
            })
            .then(result => {
                console.log('success', result);
                this.props.getFriends();
            })
            .catch(error => {
                console.error(error);
            });
        this.setState({ name: '', age: '', email: '' });
    };



    updateFriend = (id, name, age, email) => {};
    render() {
      return (
        <div className="add-friend-form">
        <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                autoComplete='name'
                required
            />
            <label htmlFor="age">Age:</label>
            <input
                type="number"
                name="age"
                onChange={this.onChange}
                value={this.state.age}
                max='120'
            />
            <label htmlFor="age">Email:</label>
            <input
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                autoComplete='email'
            />
            <input className='add-button' type="submit" value="Add Friend" />
        </form>
    </div>
    );
  }
}

export default FriendForm;