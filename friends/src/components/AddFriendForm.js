import React, { Component } from 'react';

class AddFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name && this.state.age && this.state.email !== "") {
            const newFriend = {
                name: this.state.name,
                age: Number(this.state.age),
                email: this.state.email,
            }
            this.props.addFriend(newFriend);
        }
        this.setState({name: '', age: '', email: ''});
    }
    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );
    render() {
        return(
            <form className="add-friend" onSubmit={this.onSubmit}>
                <h4>Add a friend</h4>
                <div className='input-field'>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' value={this.state.name} onChange={this.onChange} required />
                </div>
                <div className='input-field'>
                <label htmlFor='age'>Age</label>
                <input id='age' name='age' value={this.state.age} onChange={this.onChange} required />
                </div>
                <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input id='email' name='email' value={this.state.email} onChange={this.onChange} required />
                </div>
                <button className='btn' type='submit'>Add Friend</button>
            </form>
        )
    }
}

export default AddFriendForm;