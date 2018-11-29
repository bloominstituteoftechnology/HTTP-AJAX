import React from 'react';

class SubmitNewFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewFriend();
        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input onChange={this.props.handleChange} name="name" placeholder="name" value={this.props.name} type="text" />
                <input onChange={this.props.handleChange} name="age" placeholder="age" value={this.props.age} type="number" />
                <input onChange={this.props.handleChange} name="email" placeholder="email" value={this.props.email} type="email" />
    
                <button>Add</button>
            </form>
        )
    }
}

export default SubmitNewFriend;