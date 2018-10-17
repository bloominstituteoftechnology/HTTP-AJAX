import React from 'react';
import axios from 'axios';


class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: 0,
            email: '',
        }
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => this.setState({ friends: response.data }))
          .catch(error => console.log(error));
        //     this.setState({ items: data });
      }

    changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
    }
    
    submitHandler = event => {
        event.preventDefault();
            let newFriend = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            }

        axios.post('http://localhost:5000/friends', newFriend)
        .then(response => {
            this.setState({
            friends: response.data,
            name: '',
            })
        })
        .catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <div>
                        <h2>Name: {friend.name}</h2>
                        <h4>Age: {friend.age}</h4>
                        <h4>Email: {friend.email}</h4>
                    </div>  
                ))}
                <form onSubmit={this.submitHandler}>
                    <input required name='name' type="text" placeholder="Your Name" value={this.value} onChange={this.changeHandler}/>
                    <input required name='age' type="text" placeholder="Your Age" value={this.value} onChange={this.changeHandler}/>
                    <input required name='email' type="email" placeholder="Your Email" value={this.value} onChange={this.changeHandler}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Friends;