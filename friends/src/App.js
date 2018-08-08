import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      friends :[]
    }
  }
  friendLister =()=>{
    return this.state.friends.map((e,i)=>{
      return <div id={e.id} key={i} className='friendListRow'>
        <div className='friendsListItem'>
        {e.name}
        </div>
        <div className='friendsListItem'>
        {e.age}
        </div>
        <div className='friendsListItem'>
        {e.email}
        </div>
      </div>
    })
  }
  componentDidMount =()=>{
    axios.get('http://127.0.0.1:5000/friends').then(response => {
     this.setState({
       friends: response.data
     })
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
      <div className="friendsListContainer">
        <div className='friendsListTitleBar'>
          <div className='titleItem'>
            Name
          </div>
          <div className='titleItem'>
            Age
          </div>
          <div className='titleItem'>
            Email
          </div>
        </div>
        {this.friendLister()}
      </div>
      </div>
    );
  }
}

export default App;
