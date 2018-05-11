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
        console.log('deleted id', id)
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log('error deleting ', err)) 
  }

  render() { 
    //console.log('Friend List State', this.state.friends)
    return (
      <div className="container">
        {this.state.friends.map(friend =>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">{friend.name}</h5>
              <ul className="list-group">
                <li className="list-group-item">age: {friend.age}</li>
                <li className="list-group-item">email: {friend.email}</li>
              </ul>
              <button className="btn btn-danger mt-2" type="button" onClick={() => this.handleDelete(friend.id)}>Delete</button>
            </div>
          </div>
        )}
      </div> 
    )
  }
}

export default FriendList;