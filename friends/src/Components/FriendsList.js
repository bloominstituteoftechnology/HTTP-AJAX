import React from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends:[]
        }
    }
    // console.log(props)
    // const { friendsList } = props;
    // console.log(friendsList)

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then((result)=>{
          // console.log(result);
          this.setState({friends: result.data})
        })
      }

    render() {
        return ( 
            <div className="list-container">
                {this.state.friends.map(friend=><Friend friend={friend} key={friend.id} />)}
            </div> 
        );
    }
    
}
 
export default FriendsList;