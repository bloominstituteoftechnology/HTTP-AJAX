import React, { Component } from 'react'
import axios from 'axios';


class Friends extends Component {

  constructor (){
    super ();
    this.state = {
      friends: [],
      showInfo: true
    }
  }

  componentWillMount (){
    this.getFriends();
  }

  getFriends (){
    axios.get ('http://localhost:5000/friends')
    .then (response => {this.setState ({friends: response.data}, () => {
      //console.log (this.state);
    })

  })
}

onShowClick = (e) =>{
this.setState({showInfo: !this.state.showInfo});
};

  render() {
    const friendItems = this.state.friends.map((friend, i) => {
      return (
      
      <div className="card card-body mb-3">
        <h4 className>{friend.name}<i onClick ={this.onShowClick} className="fas fa-sort-down" />
        <i className="fas fa-trash" style={{cursor:'pointer', float:'right', color:'red'}}></i>
        </h4>
        
        <list className="list-group">
          <p className="list-group-item">Age: {friend.age}</p>
          <p className="list-group-item">Email: {friend.email}</p>
        </list>
 
      </div>
      )
    })

    return (
      <div>
        <h3>Friends</h3>
        <div className>{friendItems}</div>
      </div>
    )
  }
}


export default Friends;