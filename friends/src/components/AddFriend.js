import React, { Component } from 'react';
import axios from 'axios';

class FriendManager extends Component {
    constructor(){
        super();
        this.state = {
            friends: [],
            newName: '',
            newAge:'',
            newEmail:'',
            clicked: false
        };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState(() => ({ friends: response.data}));
    })
    .catch(error => {
        console.error('No Friends', error);
    })
}

  addName = (event) => {
      event.preventDefault();
      const friends = this.state.friends;
      friends.push(this.state.newName);
      this.setState({
        newName: '',
        friends: friends
      });
  }
  addAge = (event) => {
      event.preventDefault();
      const friends = this.state.friends;
      friends.push(this.state.newAge);
      this.setState({
        newAge:'',
        friends: friends
      });
  }
  addEmail = (event) => {
      event.preventDefault();
      const friends = this.state.friends;
      friends.push(this.state.newEmail);
      this.setState({
        newEmail:'',
        friends: friends
      });
  }

    handleChange (evt) {
        
    }

//   handleNewNameInput = (event) => {
//       this.setState({ 
//           newName: event.target.value,
//          });
//   }
//   handleNewAgeInput = (event) => {
//       this.setState({ 
//           newAge: event.target.value,
//          });
//   }
//   handleNewEmailInput = (event) => {
//       this.setState({ 
//           newEmail: event.target.value,
//          });
//   }


//   handleClick = () => 

render(){
    return(
        <div>
            <form onSubmit={`${this.addName} ${this.addAge} ${this.addEmail}`}>
                <input className="friend__textbox" type="text" onChange={this.handleNewNameInput} placeholder="-Enter A Name-" value={this.state.newName} />
          

                <input className="friend__textbox" type="text" onChange={this.handleNewAgeInput} placeholder="-Enter An Age-" value={this.state.newAge}/>

            
                <input className="friend__textbox" type="text" onChange={this.handleNewEmailInput} placeholder="-Enter An Email-" value={this.state.newEmail}/>
            </form>
                
        </div>
    );
}




}

export { FriendManager };