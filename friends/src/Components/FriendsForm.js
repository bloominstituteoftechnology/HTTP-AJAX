import './FriendsList.css'
import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NewFriend: {
                name: '',
                age: '',
                email: ''
            }
        };

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(event) {
        const newFriend = this.state.NewFriend;

        newFriend[event.target.name] = event.target.value;

        this.setState({NewFriend: newFriend})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/friends`, this.state.NewFriend)
            .then(response => {
                this.setState({
                    Friends: response.data,
                    NewFriend: {
                        name: '',
                        age: '',
                        email: ''
                    }
                });
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <fieldset>
                    <legend>Add A New Friend:</legend>
                    <div>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.NewFriend.name}/>
                    </div>
                    <div>

                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={this.state.NewFriend.age}/>
                    </div>
                    <div>

                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.NewFriend.email}/>
                    </div>
                    <button>Add Friend</button>
                </fieldset>
            </form>
        );
    }
}

export default FriendsForm;