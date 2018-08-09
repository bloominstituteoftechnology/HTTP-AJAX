import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Friend from './Friend';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    background-color: lightgray;
`
const UpdateFields = styled.div`
    top: 50;
    position: fixed;

`


const url = 'http://localhost:5000/friends';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            name: '',
            age: '',
            email:'',
            listNumber: ''
         }     
    }

componentDidMount () {
    axios.get(url)
    .then(response => {
        this.setState({
            friends: response.data
        });
    })
}

delete = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
        this.setState({
            friends: response.data
        })
    })
    .then(response => {
        console.log(response);
    })
}

handleChange = event => {
    this.setState({ 
        [event.target.name]: event.target.value
    });
}

update = () => {
    const id = this.state.listNumber;
    const updatedFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
    }
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
            friends: res.data
        })
    })
}

    render() { 
        return ( 
            <Wrap>
            <UpdateFields>
                        <input
                            type='number'
                            placeholder='List number'
                            name='listNumber' 
                            value={this.state.cardNumber} 
                            onChange={this.handleChange}/>
                        <input
                            type="text"
                            name="name"
                            placeholder='New name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder='New age'
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='New email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    
                </UpdateFields>
                {this.state.friends.map(friend => 
                    
                   <Friend
                   key={friend.id}
                   number={friend.id}
                   name={friend.name.toUpperCase()}
                   age={friend.age}
                   email={friend.email}
                   delete={() => this.delete(friend.id)}
                   update={() => this.update(friend.id)}
                   />
                )}
                
            </Wrap>
         );
    }
}
 
export default FriendList;