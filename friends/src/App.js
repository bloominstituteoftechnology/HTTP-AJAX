import React, { Component } from 'react';
import NewFriend from './NewFriend';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: '',
      phoneNumber: '',
      favoriteColor: '',
    },
    updateIndex: null,
	};		

	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Friends</h1>
        </header>
        <div className="container">
          <div className="friend-grid">
            {this.state.friends.map((friend, i) => {
              return (
                <div key={friend.id} className="friend">
                  <h2 className="friend-name" id={`friend-name-${friend.id}`}>{friend.name}</h2>
                  <div className="friend-age">{`Age: ${friend.age}`}</div>
                  <div className="friend-email">{`Email: ${friend.email}`}</div>
                  <div className="friend-phone">{`Phone number: ${friend.phoneNumber}`}</div>
                  <div className="friend-favorite-color">{`Favorite color: ${friend.favoriteColor}`}</div>
                  <div className="friend-buttons">
                    <button type="button" id={`update-${friend.id}`} onClick={this.toggleUpdate}>Update</button>
                    <button type="button" id={`delete-${friend.id}`} onClick={this.deleteFriend}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <NewFriend updateName={this.updateName} updateAge={this.updateAge} updateEmail={this.updateEmail}
          updatePhone={this.updatePhone} updateFavoriteColor={this.updateFavoriteColor}
            onSubmit={this.submitRequest} />
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => {
        this.setState({
          friends: response.data,
          newFriend: this.state.newFriend,
          updateIndex: null,
        });
      })
      .catch((error) => {
        alert('There was an error: ', error);
        return;
      });	
  }

  updateName = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: event.target.value,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
        phoneNumber: this.state.newFriend.phoneNumber,
        favoriteColor: this.state.newFriend.favoriteColor,
      },
      updateIndex: this.state.updateIndex,
    });
  };

  updateAge = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: this.state.newFriend.name,
        age: event.target.value,
        email: this.state.newFriend.email,
        phoneNumber: this.state.newFriend.phoneNumber,
        favoriteColor: this.state.newFriend.favoriteColor,
      },
      updateIndex: this.state.updateIndex,
    });
  };

  updateEmail = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: event.target.value,
        phoneNumber: this.state.newFriend.phoneNumber,
        favoriteColor: this.state.newFriend.favoriteColor,
      },
      updateIndex: this.state.updateIndex,
    });
  };

  updatePhone = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
        phoneNumber: event.target.value,
        favoriteColor: this.state.newFriend.favoriteColor,
      },
      updateIndex: this.state.updateIndex,
    });
  };

  updateFavoriteColor = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
        phoneNumber: this.state.newFriend.phoneNumber,
        favoriteColor: event.target.value,
      },
      updateIndex: this.state.updateIndex,
    });
  };

  toggleUpdate = (event) => {
    const index = Number(event.target.id.charAt(7));
    if (this.state.updateIndex === null) {
      this.setState({
        friends: this.state.friends,
        newFriend: this.state.newFriend,
        updateIndex: index,
      });
      const friendName = document.getElementById(`friend-name-${index}`);
      friendName.classList.add('friend-name-update');
      const formHeader = document.getElementById('form-header');
      formHeader.classList.add('form-header-update');
      formHeader.innerHTML = `Update ${friendName.innerHTML}:`;
      event.target.innerHTML = 'Cancel';
    } else if (this.state.updateIndex === index) {
      const updateIndex = this.state.updateIndex;
      this.setState({
        friends: this.state.friends,
        newFriend: this.state.newFriend,
        updateIndex: null,
      });
      document.getElementById(`friend-name-${updateIndex}`).classList.remove('friend-name-update');
      const formHeader = document.getElementById('form-header');
      formHeader.classList.remove('form-header-update');
      formHeader.innerHTML = 'Add new friend:';
      event.target.innerHTML = 'Update';
    } else {
      const previousIndex = this.state.updateIndex;
      this.setState({
        friends: this.state.friends,
        newFriend: this.state.newFriend,
        updateIndex: index,
      });
      const friendName = document.getElementById(`friend-name-${previousIndex}`);
      friendName.classList.remove('friend-name-update');
      const updateFriendName = document.getElementById(`friend-name-${index}`);
      updateFriendName.classList.add('friend-name-update');
      document.getElementById('form-header').innerHTML = `Update ${updateFriendName.innerHTML}:`;
      event.target.innerHTML = 'Cancel';
      document.getElementById(`update-${previousIndex}`).innerHTML = 'Update';
    }
  };


  submitRequest = (event) => {
    event.preventDefault();
    const newFriend = this.state.newFriend;
    const updateIndex = this.state.updateIndex;
    if (newFriend.name.trim() === '') {
      if (this.state.updateIndex === null) {
        alert('Name cannot be blank!')
        return;
      }
      newFriend.name = this.state.friends.find(friend => friend.id === updateIndex).name;
    }
    if (newFriend.age.trim() === '') {
      if (this.state.updateIndex === null) {
        alert('Age cannot be blank!')
        return;
      }
      newFriend.age = this.state.friends.find(friend => friend.id === updateIndex).age;
    }
    if (newFriend.email.trim() === '') {
      if (this.state.updateIndex === null) {
        alert('Email cannot be blank!')
        return;
      }
      newFriend.email = this.state.friends.find(friend => friend.id === updateIndex).email;
    }
    if (newFriend.phoneNumber.trim() === '') {
      if (this.state.updateIndex === null) {
        alert('Phone number cannot be blank!')
        return;
      }
      newFriend.phoneNumber = this.state.friends.find(friend => friend.id === updateIndex).phoneNumber;
    }
    if (newFriend.favoriteColor.trim() === '') {
      if (this.state.updateIndex === null) {
        alert('Favorite color cannot be blank!')
        return;
      }
      newFriend.favoriteColor = this.state.friends.find(friend => friend.id === updateIndex).favoriteColor;
    }
    if (this.state.updateIndex === null) {
      axios.post('http://localhost:5000/friends', newFriend)
        .then(() => {
          axios.get('http://localhost:5000/friends')
            .then((response) => {
              this.setState({
                friends: response.data,
                newFriend: {
                  name: '',
                  age: '',
                  email: '',
                  phoneNumber: '',
                  favoriteColor: '',
                },
                updateIndex: null,
              });
            })
            .catch((error) => {
              alert('There was an error: ', error);
              return;
            });      
        })
        .catch((error) => {
          alert('There was an error: ', error);
          return;
        })
        .finally(() => {
          this.setState({
            friends: this.state.friends,
            newFriend: {
              name: '',
              age: '',
              email: '',
              phoneNumber: '',
              favoriteColor: '',
            },
            updateIndex: null,
          });
        });
    } else {
      axios.put(`http://localhost:5000/friends/${updateIndex}`, newFriend)
      .then(() => {
        axios.get('http://localhost:5000/friends')
          .then((response) => {
            this.setState({
              friends: response.data,
              newFriend: {
                name: '',
                age: '',
                email: '',
                phoneNumber: '',
                favoriteColor: '',
              },
              updateIndex: null,
            });
          })
          .catch((error) => {
            alert('There was an error: ', error);
            return;
          });      
      })
      .catch((error) => {
        alert('There was an error: ', error);
        return;
      })
      .finally(() => {
        this.setState({
          friends: this.state.friends,
          newFriend: {
            name: '',
            age: '',
            email: '',
            phoneNumber: '',
            favoriteColor: '',
          },
          updateIndex: null,
        });
      });
    }    
    if (this.state.updateIndex !== null) {
      const index = this.state.updateIndex;
      document.getElementById(`friend-name-${index}`).classList.remove('friend-name-update');
      document.getElementById(`update-${index}`).innerHTML = 'Update';
      const formHeader = document.getElementById('form-header');
      formHeader.classList.remove('form-header-update');
      formHeader.innerHTML = 'Add new friend:';
    }
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('favorite-color').value = '';
  };

  deleteFriend = (event) => {
    let index = Number(event.target.id.charAt(7));
    axios.delete(`http://localhost:5000/friends/${index}`)
      .then(() => {
        axios.get('http://localhost:5000/friends')
          .then((response) => {
            this.setState({
              friends: response.data,
              newFriend: this.state.newFriend,
              updateIndex: this.state.updateIndex,
            });
          })
          .catch((error) => {
            alert('There was an error: ', error);
            return;
          });    
      })
      .catch((error) => {
        alert('There was an error: ', error);
        return;
      });
    if (this.state.updateIndex === index) {
      this.setState({
        friends: this.state.friends,
        newFriend: this.state.newFriend,
        updateIndex: null,
      });
      const formHeader = document.getElementById('form-header');
      formHeader.classList.remove('form-header-update');
      formHeader.innerHTML = 'Add new friend:';
    } else if (this.state.updateIndex !== null) {
      index = this.state.updateIndex;
      const friendName = document.getElementById(`friend-name-${index}`);
      friendName.classList.add('friend-name-update');
      const formHeader = document.getElementById('form-header');
      formHeader.classList.add('form-header-update');
      formHeader.innerHTML = `Update ${friendName.innerHTML}:`;
      event.target.innerHTML = 'Cancel';
    }
  };
}

export default App;
