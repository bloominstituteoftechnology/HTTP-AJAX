import React, { Route, Fragment, Component } from 'react';
import axios from 'axios'; 
import Friend from './Friend';
import FriendZone from './FriendZone';

class FriendsList extends Component {
    
constructor(props) {
        super(props);
        this.state = {
          friends: [],
          friend:{
            name: '',
            age: null,
            email: ''
          }
          };
        }
      
    
componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
        this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
        console.error('Server Error', error);
        });
      }

handleChange = event => {
this.setState({
    ...this.state.friend,
    friend: {
        [event.target.name]: event.target.value,
    }
  })
}


handleNameAdd = event => {
    event.preventDefault();
    axios
        .post('http://localhost:5000/friends', this.state.friend)
        .then(response => {
        this.setState({ friends: [...response.data], friend: {name:'', age: null, email:'',}});
        })
        .catch(error => {
        console.error('Server Error', error);
        });
      }    





  render() {
    return (
    <Fragment>
    <div className="friendform">
    {/* <Route
     path="/add-friend"
     render={props => (
    <FriendZone {...props} handleChange ={this.handleChange} friend={this.state.friend} 
            />
        )} */}
    {/* /> */}

    <FriendZone handleChange ={this.handleChange} friend={this.state.friend} handleNameAdd={this.handleNameAdd} />

    </div>
    <div className="FriendList">
      {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
      ))}
    </div>
    
    </Fragment>
    );
  }
}


export default FriendsList;