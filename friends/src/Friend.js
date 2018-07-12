import React, { Component } from 'react';

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
                        <input type='text' placeholder='Enter name here' onChange={this.handleNameChange} value={this.state.editedFriend.name} />
                        <input type='number' placeholder='Enter age here' onChange={this.handleAgeChange} value={this.state.editedFriend.age} />
                        <input type='text' placeholder='Enter email here' onChange={this.handleEmailChange} value={this.state.editedFriend.email} />
                        <button>Save Changes</button>
                        <button>Delete Friend</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Friend;