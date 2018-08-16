import React, {Component} from 'react';
import axios from 'axios';
import Friend from './Friend';

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
        }
    }
    
   
    getFriends = () => {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(error => {
                console.log(error);
             });
            
    }
    componentDidMount() {
        this.getFriends();
    }

    render() { 
      console.log(this.state);  
        return ( 
            <div>
                {this.state.friends.map(friend => <Friend friend= {friend} />)}
            </div>
         );
    }
}
 
export default Friends;