import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class FriendEdit extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: Number(props.match.params.id),
            name: '',
            age: '',
            email: ''
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                let currentName, currentAge, currentEmail;

                response.data.forEach(friend => {
                    if (this.state.id === friend.id) {
                        currentName = friend.name;
                        currentAge = friend.age;
                        currentEmail = friend.email;
                    }
                })
                this.setState({ name: currentName, age: currentAge, email: currentEmail });
            })
            .catch(err => {
                console.error(err);
            });
    }

    updateFriend = id => {
        const update = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios
            .put(`http://localhost:5000/friends/${id}`, update)
            .then(response => {
                alert('Update Confirmed!')
                this.setState({ name:this.state.name, age:this. })
            })
            .catch(err => (
                console.error(err)
            ));
    };

    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addInput} >
                    Name:
                    <input className="input" name='name' value={this.state.name} onChange={this.updateInput} type="text" placeholder="Friend's Name Here" />
                    Age:
                    <input className="input" name='age' value={this.state.age} onChange={this.updateInput} type="number" placeholder="Friend's Age Here" />
                    E-mail:
                    <input className="input" name='email' value={this.state.email} onChange={this.updateInput} type="email" placeholder="Friend's Email Here" />
                </form>
                <button className="button button-update" onClick={() => this.updateFriend(this.state.id)} > Confirm update </button>
                <Link to="/" >
                    <button className="button button-return"> Return </button>
                </Link>
            </div>
        );
    }
};

export default FriendEdit;