import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                name: '',
                age: '',
                email: ''
        }
    }

    handleChange = e => {
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.addFriend(newFriend)
        
        this.setState({
                name: '',
                age: '',
                email: ''
        }) 
    }

    render() { 
        return ( 
            <div className='form'>
                <form onSubmit={this.addFriend}>
                    <h1>Add Friend</h1>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={this.state.name}
                        />
                    <input 
                        type='number'
                        name='age'
                        placeholder='Age'
                        onChange={this.handleChange}
                        value={this.state.age}
                        />
                    <input 
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        />  
                    <button type='submit'>
                        Add Friend
                    </button>
            
                </form>
            </div>
         );
    }
}

 
export default FriendForm;