import React, {Component} from 'react';
import axios from 'axios';

class FriendsList extends Component {
    state = { 
        friends: [],
        newName: '',
        newAge: '',
        newEmail: '' 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {this.setState({ friends: response.data})})
            .catch(error => {
                console.error('There was an error', error);
            })
    };

    handleName = (event) => {
        this.setState({ newName: event.target.value})
    };

    handleAge = (event) => {
        this.setState({ newAge: event.target.value})
    };

    handleEmail = (event) => {
        this.setState({ newEmail: event.target.value})
    };

    addNewItem = (event) => {
        axios.post('http://localhost:5000/friends', 
        {
            name: this.state.newName, 
            age: this.state.newAge, 
            email: this.state.newEmail
        })
        .catch(err => {
            console.error('There was an error', err);
        })
        this.setState({
            newName: '',
            newAge: '',
            newEmail: ''
        })
    };

    render() {
        return(
            <div>
                <div className='Friend_Title'>Friends</div>
                <div className='Friend_List'>
                {this.state.friends.map(friend => {
                    return(
                        <div className='mt-2 mb-2' key={friend.id}>
                            <div>{friend.name}</div>
                            <div>{`Age: ${friend.age}`}</div>
                            <div>{`Email: ${friend.email}`}</div>
                        </div>
                    );
                })}
                </div>
                <form onSubmit={this.addNewItem}>
                <input
                    type='text'
                    onChange={this.handleName}
                    placeholder='New Friend Name'
                    value={this.state.newName}
                />
                <input className='ml-2'
                    type='text'
                    onChange={this.handleAge}
                    placeholder='New Friend Age'
                    value={this.state.newAge}
                />
                <input className='ml-2'
                    type='text'
                    onChange={this.handleEmail}
                    placeholder='New Friend Email'
                    value={this.state.newEmail}
                />
                <button>Submit</button>
                </form>
            </div>
        );
    }

    

}

export default FriendsList;