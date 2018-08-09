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

const url = 'http://localhost:5000/friends';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: []
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

    



    render() { 
        return ( 
            <Wrap>
                {this.state.friends.map(friend => (
                   <Friend
                   key={friend.id}
                   name={friend.name}
                   age={friend.age}
                   email={friend.email}
                   delete={() => this.delete(friend.id)}
                   />
                ))}
            </Wrap>
         );
    }
}
 
export default FriendList;