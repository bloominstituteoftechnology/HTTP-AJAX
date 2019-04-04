import React from 'react'

const Hidden = {
    display: 'none'
}

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }

        }
    };

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
            }
        });
    };

    render() {
        console.log(this.state.friend)
        return (
            <div>
                <h2>Add Lambda Atlantian</h2>
                <form onSubmit={this.handleSubmit} type='submit'>
                    <input
                        type='text'
                        name='name'
                        onChange={this.changeHandler}
                        placeholder='name'
                        value={this.state.friend.name}
                    />
                    <input
                        type='number'
                        name='age'
                        onChange={this.changeHandler}
                        placeholder='age'
                        value={this.state.friend.age}
                    />
                    <input
                        type='text'
                        name='email'
                        onChange={this.changeHandler}
                        placeholder='email'
                        value={this.state.friend.email}
                    />
                    <button onClick={this.handleSubmit} style={Hidden}>enter</button>
                </form>
            </div>
        )
    }

}

export default AddFriendForm