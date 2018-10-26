import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import UpdateFriend from './UpdateFriend';
import FriendListHeader from './FriendListHeader';
import { ListWrapper, StyledForm } from './Styled';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(data => {
        // console.log(data.data);
        this.setState({ friends: data.data });
        // console.log(this.state);
      })
      .catch(() => alert('GET Error'));
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.friends);
    if (this.state.name && this.state.age && this.state.email) {
      const name = this.state.name;
      const age = +this.state.age;
      const email = this.state.email;

      axios
        .post('http://localhost:5000/friends', { name, age, email })
        .then(res => {
          //   console.log(res);
          //   console.log(res.data);
          this.setState({
            friends: res.data,
            name: '',
            age: '',
            email: ''
          });
        })
        .catch(() => alert('POST Error'));
    } else {
      alert('Please enter name, age and email');
    }
  };

  deleteFriend = event => {
    const id = event.target.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(() => alert('DELETE Error'));
  };

  updateFriend = e => {
    const fid = e.target.id;
    // console.log(fid)
    // console.log(e.target.parentNode.parentNode);
    this.setState({ id: fid });
    console.log(this.state);
  };

  submitUpdate = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(data => {
        // console.log(data.data);
        this.setState({
          friends: data.data,
          id: ''
        });
        // console.log(this.state);
      })
      .catch(() => alert('GET Error'));
  };

  render() {
    return (
      <div>
        {/* <h1>Friends List:</h1> */}
        <StyledForm>
          <h3>Add a friend</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={this.handleInput}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleInput}
            value={this.state.email}
          />
          <button onClick={this.handleSubmit}>Add Friend</button>
        </StyledForm>
        <br />
        <br />
        <br />
        <ListWrapper>
          <FriendListHeader name="Name" age="Age" email="Email" />
          {this.state.friends.map(friend => {
            // console.log(friend.id);
            // console.log(this.state.id);
            if (friend.id === +this.state.id) {
              return (
                <UpdateFriend
                  id={friend.id}
                  name={friend.name}
                  age={friend.age}
                  email={friend.email}
                  submitUpdate={this.submitUpdate}
                  handleInput={this.handleInput}
                />
              );
            }
            return (
              <Friend
                key={friend.id}
                id={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
                deleteFriend={this.deleteFriend}
                updateFriend={this.updateFriend}
              />
            );
          })}
        </ListWrapper>
      </div>
    );
  }
}

export default FriendsList;
