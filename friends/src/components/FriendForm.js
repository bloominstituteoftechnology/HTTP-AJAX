import React from 'react';
import './Friends.css';


class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriendHandler(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        });
    }

    handleChangeOnName = event => {
        let friend = this.state.friend;
        friend['name'] = event.target.value;
        this.setState({ friend: friend });
    }

    handleChangeOnAge = event => {
        let friend = this.state.friend;
        friend['age'] = Number.parseInt(event.target.value);
        this.setState({ friend: friend });
    }

    handleChangeOnEmail = event => {
        let friend = this.state.friend;
        friend['email'] = event.target.value;
        this.setState({ friend: friend });
    }

    render() {
        return (
            <form className="friend-form" onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td className="friend-name"><input
                                placeholder="Friend's Name"
                                value={this.state.friend.name}
                                onChange={this.handleChangeOnName}
                            /></td>
                            <td className="friend-age"><input
                                placeholder="Age"
                                value={this.state.friend.age}
                                onChange={this.handleChangeOnAge}
                            /></td>
                            <td className="friend-email"><input
                                placeholder="Email Address"
                                value={this.state.friend.email}
                                onChange={this.handleChangeOnEmail}
                            /></td>
                            <td className="friend-controls">
                                <button>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default FriendForm;