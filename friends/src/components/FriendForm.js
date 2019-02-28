import React from 'react';
import axios from 'axios'

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        let newfriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios
            .post("http://localhost:5000/friends", newfriend)
            .then(res => {
                    this.setState({ data: res.data})
                  })
            .catch(err => console.log('You messed up!'))
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.name} name='name' onChange={this.handleChange} />
                    <input type="number" placeholder="Age" value={this.age} name='age'onChange={this.handleChange} />
                    <input type="text" placeholder="Email" value={this.email} name='email' onChange={this.handleChange} />
                    <button type="submit">Add My New Friend</button>
                </form>
            </>
        )
    }
}

export default FriendForm;