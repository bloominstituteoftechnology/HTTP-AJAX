import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
	  friends: [],
		newFriend: {
     name: '',
		 age: '',
		 email: '',
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
				     //{this.state.friends.map(friend => {
				  return (
               <div key={friend.id} className="friend">
                 <h2 className="friend-name" id={`friend-name-${friend.id}`}>{friend.name}</h2>
                  <div className="friend-age">{`Age: ${friend.age}`}</div>
                  <div className="friend-email">{`Email: ${friend.email}`}</div>
                  <div className="friend-buttons">
                    <button type="button" id={`update-${friend.id}`} onClick={this.toggleUpdate}>Update</button>
                    <button type="button" id={`delete-${friend.id}`} onClick={this.deleteFriend}>Delete</button>
                  </div>
                </div>
							 );
					     })}
							</div>	
					</div>	
         <form onSubmit={this.submitRequest}>
          <h2 id='form-header'>Add new friend:</h2>
          <input type="text" id="name" placeholder="Name" onChange={this.updateName} />
          <input type="text" id="age" placeholder="Age" onChange={this.updateAge} />
          <input type="text" id="email" placeholder="Email" onChange={this.updateEmail} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

   componentDidMount() {
       axios.get('http://localhost:5000/friends')
         .then((response) => {
        //     console.log('data', response.data);
             this.setState({
                friends: response.data,
								newFriend: this.state.newFriend,
								updateIndex: null,
								});
             })
         .catch((error) => {
            alert('There was an error: ', error);   
	//        console.log('there was an error', error);
						 return;
         });
    }
	 //     console.log('data', data);
    
	 updateName = (event) => {
    this.setState({
      friends: this.state.friends,
      newFriend: {
        name: event.target.value,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
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
      },
      updateIndex: this.state.updateIndex,
    });
  };

   toggleUpdate = (event) => {
    const index = Number(event.target.id.charAt(7));
    if (this.state.updateIndex === null) {
      this.state.updateIndex = index;
      const friendName = document.getElementById(`friend-name-${index}`);
      friendName.classList.add('friend-name-update');
      const formHeader = document.getElementById('form-header');
      formHeader.classList.add('form-header-update');
      formHeader.innerHTML = `Update ${friendName.innerHTML}:`;
      event.target.innerHTML = 'Cancel';
    } else if (this.state.updateIndex === index) {
      const updateIndex = this.state.updateIndex;
      this.state.updateIndex = null;
      document.getElementById(`friend-name-${updateIndex}`).classList.remove('friend-name-update');
      const formHeader = document.getElementById('form-header');
      formHeader.classList.remove('form-header-update');
      formHeader.innerHTML = 'Add new friend:';
      event.target.innerHTML = 'Update';
    } else {
      const previousIndex = this.state.updateIndex;
      this.state.updateIndex = index;
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
    if (Number(newFriend.age.trim()) === NaN) {
      alert('Age must be a number!')
      return;
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
      this.state.updateIndex = null;
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
		 /* const data = axios.post('http://localhost:5000/friends')
       .then((response) => {
        console.log('data', response.data);
	  			this.setState({friends: response.data});
        })
        .catch(function (error) {
         console.log('there was an error', error);
      }); 	
   }
}*/

export default App;
