import React, {
  Component
} from 'react';
import axios from 'axios';
//import FriendInput from './FriendInput';


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
        //console.log('deleted id', id)
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log('error deleting ', err))
  }

  handleUpdate = id => {
    //let stateObj = this.state;
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => res.data.find(el => el.id === id))
      .then(data => {
        console.log('data', data) // returns the object with the id that "===" with the id passed to handleUpdate()
        data.name = prompt('Name', data.name);
        data.age = prompt('Age', data.age);
        data.email = prompt('Email', data.email);
        return data;
      })
      .then(data => {
        console.log('edited', data) // return the edited object
        this.setState({
          friends: [...this.state.friends, data]
        })
      })
      .catch(data => console.log(data))
  }

        // console.log(res);
        // const mapped = stateObj.friends.forEach(friend => {
        //   if (friend.id === res.id) {
        //     friend = res;
        //   }
        // })
        // return mapped;
    // axios.get(`http://localhost:5000/friends`)
    //   .then(res => {
    //     console.log(res)
    //     this.setState({
    //       friends: res.data
    //     })
    //   })
    //   .catch(err => console.log(err));

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
              <button className="btn btn-outline-success mt-2" type="button" onClick={() => this.handleUpdate(friend.id)}>Update</button>
              <button className="btn btn-outline-danger mt-2 ml-2" type="button" onClick={() => this.handleDelete(friend.id)}>Delete</button>
            </div>
          </div>
        )}
      </div> 
    )
  }
}

export default FriendList;