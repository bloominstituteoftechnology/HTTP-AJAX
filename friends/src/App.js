import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FriendsContainer from './components/FriendsContainer';
import { NavLink, Route, Switch, Link } from 'react-router-dom'
import NewFriendComponent from './components/NewFriendComponent';

class App extends Component {

  constructor (){
    super()
    this.state = {
      friends: [],
      lodaded: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => {
        const data = res.data
        this.setState({
          friends: data,
          lodaded: true
        })
      })
  }

  openForm (){
    
  }

  render() {
    if (!this.state.lodaded) 
      return (
        <h1>Loading...</h1>
      )

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/friends" 
              render={props => <FriendsContainer {...props} friends={this.state.friends} />}
            />
            <Route path="/add" render={props => <NewFriendComponent {...props} />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

function Header (){
  return (<header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/add'>Add Friend</Link></li>
      </ul>
    </nav>
  </header>)
}

export default App;
