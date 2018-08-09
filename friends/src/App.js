import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendCard from './components/FriendCard';
import Form from './components/Form';

const url =
  "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true
    }
  }
  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  remove(id) {
    axios.delete(`${url}/${id}`)
      .then((response) => {
        console.log(response)})
        .catch((error) => {
        console.log(error)});
    window.location.reload();
  }
  gotoCard(name, age, email) {
    alert('name: ' + name + ' age: ' + age + ' email : ' + email);
  }
  render() {
    return (
      <div className="App">
        <h2>Lambda Friends ... <br/>
            Assemble!!</h2>
        <div className="friendHug">
          {this.state.friends.map(friend=><FriendsList key={friend.id}>
                                            <p>{friend.name}</p>
                                            <p>age:{friend.age}</p>
                                            <Link key={friend.id} to={`/${friend.id}`}><button>more</button></Link>
                                            <button onClick={()=> this.remove(friend.id)}>remove</button>
                                            </FriendsList>
                                          )}
          {this.state.friends.map(friend=><Route key={friend.id} exact path={`/:id`}
                                                render={props=>   
                                                  <FriendCard id={friend.id}
                                                  name={friend.name}
                                                  age={friend.age} 
                                                  email={friend.email}
                                                  {...props}
                                                  />}
                                            />)}
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
