import React from 'react';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';
import axios from 'axios';




class App extends React.Component {
    state = {
        friends: [],
    }
    render() {
        return (
            <div className="app">
            <Friends friendList={this.state.friends}/>
            <FriendForm onCreate={this.loadFriends()} />
   
            </div>
        )
    }

    componentWillMount() {
        this.loadFriends();
       }
     
       loadFriends = () => {
         axios
         .get('http://localhost:4000/friends')
         .then(response => {
           this.setState({friends: response.data})
         })
         .catch(error => {
           console.log('There was an error', error)
         })
       }
}

export default App;