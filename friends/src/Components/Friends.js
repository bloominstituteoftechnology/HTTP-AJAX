import React, { Component } from 'react';
import axios from 'axios';

class FriendThing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: ''
        };
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    saveNameData = () => {
        const name = { name: this.state.name,
                        age: this.state.age,
                        email: this.state.email };
        axios
            .post(`http://localhost:5000/friends`, name)
            .then(savedName => {
                console.log(savedName);
                this.setState({ name: '', age: '', email: ''});
                this.componentDidMount();
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return(
            <div className="App">
        
              <h1 className="App-title">Friends List</h1>
       
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="name"
              name="name"
              value={this.state.name}
            />
    
            <input
              type="number"
              onChange={this.handleTextInput}
              placeholder="age"
              name="age"
              value={this.state.age}
            />
    
            <input
                type="text"
                onChange={this.handleTextInput}
                placeholder="email"
                name="email"
                value={this.state.email}
                />
    
            <button onClick={this.saveNameData}>Save Friend</button>
    
            {this.state.friends.map((friend) => { 
              return (
               <div key={friend.id}>
                  { friend.name }
               </div>)
             } )}
    
          </div>
        );
    }

}

export default FriendThing;