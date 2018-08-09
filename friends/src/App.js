import React, { Component } from 'react';
import FriendList from './component/Friend/FriendList';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import NewFriend from './component/Friend/NewFriend';
import styled from 'styled-components';
const url = 'http://localhost:5000/friends';

const Body = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 1000px
`

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        loading: true,
        name: '',
        age: '',
        email: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addNewFriend = e => {
    e.preventDefault();
    axios.post(url,{
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          })
         .then(response => this.setState({friends: response.data}))
  }
  updateFriend = id => {
    axios.put(`http://localhost:5000/friends/${id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          })
         .then(response => this.setState({friends: response.data}))
         .catch(err => console.log(err));
  }
  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
         .then(response => this.setState({friends: response.data}))
         .catch(err => console.log(err));
  }
  componentDidMount(){
      axios
          .get(url)
          .then(person => {
              this.setState({friends: person.data, loading: false})
          })
          .catch(err => console.log('Server Error', err));
  }
  render(){
      return(
        <Body>
            <Links>
                <Link to="/friends/:id">Meet my Friends!</Link>
                <Link to="/addFriend">Add New Friend</Link>
            </Links>
            <div>
                <Route path="/friends"
                      render={(props) => <FriendList {...props} friends={this.state.friends}
                                                                loading={this.state.loading}
                                                                delete={this.deleteFriend}
                                                                update={this.updateFriend} />} />
                <Route exact path="/addFriend"
                      render={(props) => <NewFriend {...props} newFriend={this.addNewFriend} change={this.handleChange} />} />
            </div>
          </Body>
      )
    }
}

export default App;
