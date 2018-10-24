import React from 'react';


class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Form: handleSubmit()")
    }

    handleChangeOnName = event => {

    }

    handleChangeOnAge = event => {

    }

    handleChangeOnEmail = event => {

    }

    render() {
        return (
            <form className="friend-form" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Friend's Name"
                    value={this.state.name}
                    onChange={this.handleChangeOnName}
                />
                <input
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChangeOnAge}
                />
                <input
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChangeOnEmail}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default FriendForm;