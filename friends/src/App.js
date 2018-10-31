import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import Friends from './components/Friends';
import { Route } from 'react-router-dom'
import SingleFriend from './components/SingleFriend';

class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: [],
        ids: []

    }
}

// idGrabber(){
//     this.state.friends.map(friend => {
//         let idArr = [];

//         idArr.push(friend.id)

//         return idArr ;
    
//     })
//     this.setState({
//         ids: this.idArr 
//     })

// }

componentDidMount(){
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() =>({friends: response.data}))
            console.log(response.data)
        })
        .catch(error => {
            console.error('Server Error', error)
        })

}


  render() {
    return (
      <div className="App">
      {/* <Friends {...this.props} friends={this.state.friends} /> */}
      <Route path='/' render={(props) => <Friends match={props.match} {...this.props} friends={this.state.friends} />} />
      <Route path='/friends/:id' render={(props) => <SingleFriend match={props.match} {...this.props} friends={this.state.friends} />} />
        {/* <Route path='/friends/:id' render={(props) => <SingleFriend {...this.props} friends={this.state.friends} /> } /> */}
      </div>
    );
  }
}

export default App;
