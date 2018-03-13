import React, from 'react';
import axios from 'axios';

export default class friendList extends Component {

constructor () {
    super();
    this.state = {
        friends: [],
    }
}

render(){
    return(
        <div>
            {this.state.friends.map(friend => {
                return(
                <li key={friend.id} className="friend">
                    <div className="friend-name">{friend.name} </div>
                    <div className="friend-age"> {'Age: ${friend.age}'} </div>
                    <div className="friend-email">{'Email: ${friend.email}'} </div>
                </li>
                );
            })}
            </div>
    )
    
 


}
componentDidMount() {
axios.get('http://localhost:5000/friends')
.then( response =>{
    this.setState({friends: response.data});
});
}
}


export default friendList; 




