import React from 'react';
class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendInfo: {
                name: '',
                age: [],
                email: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state.friendInfo,
            [e.target.name]: e.target.value
        })
    }

    postFriend = e => {
        e.preventDefault();
        this.props.postFriend(this.state.friendInfo);
    }

    render() {
        return (
            <div className="friend-form">
                <h1> Post a new Friend</h1>
                <form onSubmit={this.postFriend} />
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    value={this.state.friendInfo.name}
                />
            </div>
        )
    }

}

export default FriendForm;