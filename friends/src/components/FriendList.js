import React, {
  Component
} from 'react';
import axios from 'axios';
//import FriendInput from 'FriendInput';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }  

  componentDidMount() { 
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        //console.log('response', response)
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    //console.log('id', id);
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log('deleted id', response)
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log('error deleting ', err)) 
  }

  render() { 
    console.log('Friend List State', this.state.friends)
    return (
      <div>
        {this.state.friends.map(friend =>
          <div key={friend.id}>  
            <div>{friend.name} {friend.age} {friend.email} {friend.id}</div> 
            <button type="button" onClick={() => this.handleDelete(friend.id)}> Delete </button>
          </div>  
        )}
      </div>
    )
  }
}

export default FriendList;