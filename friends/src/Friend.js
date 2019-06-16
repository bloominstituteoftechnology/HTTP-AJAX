import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
    constructor() {
        super();
        this.state = {
            editedFriend: {
                name: '',
                age: '',
                email: '',
            },
        }
    }

    handleNameChange = e => {
        this.setState({ editedFriend: Object.assign({}, this.state.editedFriend, { name: e.target.value }) })
    }

    handleAgeChange = e => {
        this.setState({ editedFriend: Object.assign({}, this.state.editedFriend, { age: e.target.value }) })
    }

    handleEmailChange = e => {
        this.setState({ editedFriend: Object.assign({}, this.state.editedFriend, { email: e.target.value }) })
    }

    delete = id => {
        axios
            .delete(`'http://localhost:5000/friends/${id}'`)
            .then(response => this.setData(response.data))
            .catch(error => console.log('error: ', error))
    }


    render() {
        return (
            <div className='friend'>
                <div>
                    <div>{this.props.friend.name}</div>
                    <div>{this.props.friend.age}</div>
                    <div>{this.props.friend.email}</div>
                    <button>Edit Friend</button>
                </div>
                <div>
                    <form>
                        <span>name:</span>
                        <input type='text' placeholder={this.props.friend.name} onChange={this.handleNameChange} value={this.state.editedFriend.name} />
                        <span>age:</span>
                        <input type='number' placeholder={this.props.friend.age} onChange={this.handleAgeChange} value={this.state.editedFriend.age} />
                        <span>email:</span>
                        <input type='text' placeholder={this.props.friend.email} onChange={this.handleEmailChange} value={this.state.editedFriend.email} />
                        <button>Save Changes</button>
                        <button onClick={() => this.delete(this.props.friend.id)}>Delete Friend</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Friend;