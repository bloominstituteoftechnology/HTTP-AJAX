import React from 'react';
import axios from 'axios';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(error => {
            console.log('Error No New Friends: ${error}');
        });
    }

    addBFF = () => {
        const newBFF = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
    }
        axios.post('http://localhost:5000/friends/', newBFF)
        .then(response => {
            this.setState({name:'', age: '', email: ''});
        })
        .catch(error => {
            console.log('Error No Bestie: ${error}');
        });

    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
            <div className="title">You've got a friend in me.</div>
            <form className='form' onSubmit={this.addBFF}>
            <label> Name: <input type='text' name='name' 
            placeholder='Name'onChange={this.handleInputChange} value={this.state.name} />
            </label>
            <label> Age: <input type='number' name='age' 
            placeholder='Age' onChange={this.handleInputChange} value={this.state.age} />
            </label>
            <label> Email: <input type='text' name='email'
            placeholder='Email' onChange={this.handleInputChange} value={this.state.email} />
            </label>
            <button className='button' type='submit'>Friends FOREVERRR</button>

            </form>
            <ul className="grid">
            {this.state.friends.map(friend => {
                return (
                    <li key={friend.id} className="friend">
                    <div className="name">{friend.name}'}</div>
                    <div className="age">{'Age:${friend.age}'}</div>
                    <div className="email">{'Email: ${friend.email}'}
                    </div>
                    </li>
                );
            })} 
            </ul>
            </div>
        );
    }}

export default FriendsList;