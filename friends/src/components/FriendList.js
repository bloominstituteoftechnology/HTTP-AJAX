import React, {
  Component
} from 'react';
import axios from 'axios';
//import FriendInput from './FriendInput';


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      email: '',
      age: ''
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
        //console.log('deleted id', id)
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log('error deleting ', err))
  }

  handleUpdate = (id, friendName, friendAge, friendEmail) => {
    const name = prompt('Name', friendName);
    const age = prompt('Age', friendAge);
    const email = prompt('Email', friendEmail);

    axios
      .put(`http://localhost:5000/friends/${id}`, { 
        name, 
        age, 
        email 
      })
      .then(response => {
        //console.log('edited', response.data)
        this.setState({
          friends: response.data
        })
      })
      .catch(data => console.log(data))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() { 
    //console.log('Friend List State', this.state.friends)
    return (
      <div className="container">
        {this.state.friends.map(friend =>
          <div className="card mt-3">
            <div className="card-body">
              <input 
                className="card-title"
                type="text"
                name="name"
                value={friend.name}
                onChange={() => this.handleChange()}  
              />
              <ul className="list-group">
                <input 
                  type="text" 
                  className="list-group-item"
                  value={friend.age}
                  onChange={() => this.handleChange()} 
                />
                <input 
                  type="text" 
                  className="list-group-item" 
                  value={friend.email}
                  onChange={() => this.handleChange()}  
                />
              </ul>
              <button 
                className="btn btn-outline-success mt-2" 
                type="button" 
                onClick={() => this.handleUpdate(friend.id, friend.name, friend.age, friend.email)}>
                Update
              </button>
              <button 
                className="btn btn-outline-danger mt-2 ml-2" 
                type="button" 
                onClick={() => this.handleDelete(friend.id, friend)}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div> 
    )
  }
}

export default FriendList;