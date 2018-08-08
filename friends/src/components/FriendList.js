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
    height: 100vh;

`




const url = 'http://localhost:5000/friends';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            loading: true
         }     
    }

  

componentDidMount () {
    axios.get(url)
    .then(response => {
        this.setState({
            friends: response.data,
            loading: false,
        });
    });
}

    render() { 
        return ( 
            <Wrap>
                {this.state.friends.map(friend => (
                   <Friend
                   key={friend.id}
                   name={friend.name.toLowerCase()}
                   age={friend.age}
                   email={friend.email}
                   />
                ))}
            </Wrap>
         );
    }
}
 
export default FriendList;