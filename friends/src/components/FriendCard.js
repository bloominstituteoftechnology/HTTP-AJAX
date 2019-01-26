import React from 'react';
import FriendForm from './FriendForm';

export default class FriendCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: this.name,
                age: this.age,
                email: this.email
            },
            isEditForm: false
        }
    }
    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.path.includes('edit'));
        if (this.props.match.path.includes('edit')) {
            this.setState({ isEditForm: true });
        }
        else {
            this.setState({ isEditForm: false });
        }
    }
    editFriendHanlder = event => {
        event.preventDefault();
        this.props.editFriend(this.state.friend);
    }
    changeHandler = event => {

        this.setState({ 
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value,
                [event.target.age]: event.target.value,
                [event.target.password]: event.target.value
            }
        });
    }
    render() {
        // console.log(this.props.match.path);
        return (
            <div className="save-wrapper">
                
                { this.state.isEditForm ? 
                    <form onSubmit={this.editFriendHandler}>
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            name="name"
                            placeholder={this.state.friend.name}
                            value={this.state.friend.name}
                        >
                        </input>
                        <input
                            onChange={this.changeHandler}
                            type="number"
                            name="age"
                            placeholder={this.props.age}
                            value={this.state.friend.age}
                        >
                        </input>
                        <input
                            onChange={this.changeHandler}
                            type="email"
                            name="email"
                            placeholder={this.props.email}
                            value={this.state.friend.email}
                        >
                        </input>
                        <button onClick={this.editFriendHandler}>Edit</button>
                    </form>
                    : 
                    <div className="friend-card">
                        <h2>Name {this.props.name}</h2>
                        <div className="friend-age">
                            Age: <em>{this.props.age}</em>
                        </div>
                        <div className="friend-email">
                            Email: <strong>{this.props.email}</strong>
                        </div>
                    </div>
                }
            </div>
        )
    }
};

