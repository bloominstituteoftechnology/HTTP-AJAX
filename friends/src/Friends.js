import React, {Component} from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm'



class Friends extends Component {

  constructor() {
    super();
    this.state = {
      updateForm: false,
      updateFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  toggleForm = event => {
    event.preventDefault();
    this.setState({ updateForm: !this.state.updateForm });
  };

  updateFriendHandler = event => {
    this.setState({
      updateFriend: {
        ...this.state.updateFriend,
        [event.target.name]: event.target.value
      }
    });
  }

  saveUpdateFriend = event => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${this.friend.id}`, this.state.updateFriend)
      .then(response => {
        console.log(response);
        this.props.handleSetData(response.data);
        this.setState({
          updateFriend: {
            name: '',
            age: '',
            email: ''
          }
        })
      })
      .catch(err => console.log(err));
  }


  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
      window.location.reload();
  };

  render() {
    const { updateForm, updateFriend } = this.state;
  
    return (
      <div className='friend-wrapper'>
      
        {
          this.props.friends.map(friend => {
            return (
              <div className='friends' key={friend.id}>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>

               {updateFriend ? <UpdateForm friend={updateFriend} updateFriendHandler={this.updateFriendHandler} saveUpdateFriend={this.saveUpdateFriend} /> : null}

               <button
                  onClick={event => {
                   this.deleteFriend(event, friend.id);
                   }}
                  className="button">
                   Delete Friend
                </button>
                <button
                  onClick={event => {
                   this.toggleForm(event, friend.id);
                   }}
                  className="button">
                   Update Friend
                </button>
              </div>
            )
          })
        }
       
      </div>
    )
  }
}

export default Friends