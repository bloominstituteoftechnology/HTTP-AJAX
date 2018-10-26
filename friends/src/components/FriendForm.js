import React from 'react';
import './Friends.css';


class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            friend: {
                name: '',
                age: '',
                email: ''
            },
            mode: this.props.mode
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (event.target.id === 'button-update') {
            console.log('button-update');
            this.props.updateFriendHandler(this.state.friend);
            this.props.cancelFormHandler();
        } else if (event.target.id === 'button-cancel') {
            this.props.cancelFormHandler();
        } else {
            this.props.addFriendHandler(this.state.friend);
            this.setState({
                friend: {
                    name: '',
                    age: '',
                    email: ''
                }
            });
        }
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

    componentDidMount() {
        if (this.state.mode === 'update') this.setState({friend: this.props.friend});
    }

    componentDidUpdate() {
        console.log(this.state.friend)
    }

    render() {
        let controls;
        if (this.state.mode === 'update') {
            controls = <div className="friend-controls">
                <button id="button-update" className="button-half" onClick={this.handleSubmit}>Update</button>
                <button id="button-cancel" className="button-half" onClick={this.handleSubmit}>Cancel</button>
            </div>;
        } else {
            controls = <div className="friend-controls">
                <button>Add</button>
            </div>
        }

        return (
            <form className="friend-form" onSubmit={this.handleSubmit}>
                <div className="friend-name"><input
                    placeholder="Friend's Name"
                    value={this.state.friend.name}
                    onChange={this.handleChangeOnName}
                /></div>
                <div className="friend-age"><input
                    placeholder="Age"
                    value={this.state.friend.age}
                    onChange={this.handleChangeOnAge}
                /></div>
                <div className="friend-email"><input
                    placeholder="Email Address"
                    value={this.state.friend.email}
                    onChange={this.handleChangeOnEmail}
                /></div>
                {controls}
            </form>
        );
    }
}

export default FriendForm;