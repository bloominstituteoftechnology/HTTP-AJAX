import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

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
        const name = { 
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
         }
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

       // editFriend = (id) => {
  //   const updatedFriendObj = {
  //     name: this.state.name,
  //     age: this.state.age,
  //     email: this.state.email
  //   }
  //   axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
  //   .then(response => {
  //     this.setState({
  //       friends: response.data
  //     })
  //   })
  //   .catch((err) => console.log(err))
  // }

    editFriend = (id) => {
        const editedFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios.put(`http://localhost:5000/friends/${id}`, editedFriend)
             .then(response => {
                 this.setState({ friends: response.data})
             })
             .catch((err) => console.log(err))
    }


    render() {
        return(
            <div className="App">
        
            <FriendForm props={this.state.friends}
                        handleTextInput={this.handleTextInput}
                        saveNameData={this.saveNameData} />
            <FriendList friends={this.state.friends} />
    
          </div>
        );
    }

}

export default FriendThing;