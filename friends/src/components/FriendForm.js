import React from 'react';
import './FriendForm.css';


class FriendForm extends React.Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [ev.target.name]: value
                }
            }));
    };

    render() {
        return (
            <div>
                <form className="friend-form" onSubmit={this.handleSubmit}>
                    <input placeholder="name" />
                    <input placeholder="age" />
                    <input placeholder="email" />
                    <button className="add-friend">Add Friend</button>
                </form>
            </div>
        )
    }
}



export default FriendForm;