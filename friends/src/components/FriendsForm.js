import React from 'react';
import axios from 'axios';
import './Components.css';

class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: '',
            email: '',
            age: '',
            nameHolder: 'Enter a name...',
            emailHolder: 'Enter an email...',
            ageHolder: 'Enter an age...'
        }
    }

    editFriendsHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    saveNewFriend = () => {
        const newFriend = { name: this.state.name, age: Number(this.state.age), email: this.state.email };
        axios
          .post(`http://localhost:5000/friends`, newFriend)
          .then(response => {
            console.log('POST RESPONSE: ', response);
            this.props.handleSetData(response.data);
            this.setState({ name: '', email: '', age: '' })
          })
          .catch(error => console.log(error));
    };

    

    render() { 
        return (
            <div className="friends-form">
                <h3>Add a new friend:</h3>
                <input
                    type="text"
                    name="name"
                    placeholder={this.state.nameHolder}
                    value={this.state.name}
                    onChange={this.editFriendsHandler}
                />
                <input
                    type="text"
                    name="age"
                    placeholder={this.state.ageHolder}
                    value={this.state.age}
                    onChange={this.editFriendsHandler}
                />
                <input
                    type="text"
                    name="email"
                    placeholder={this.state.emailHolder}
                    value={this.state.email}
                    onChange={this.editFriendsHandler}
                />
                <button onClick={this.saveNewFriend}>Save</button>
            </div>
        )
    }
}
 
export default FriendsForm;