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

const Input = styled.div`
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid black;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        loading: true,
        name: '',
        age: '',
        email: '',
        id:''
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
  updateFriend = e => {
    axios.put(`${url}/${e.target.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          })
         .then(response => this.setState({friends: response.data}))
         .catch(err => console.log(err));
  }
  deleteFriend = e => {
    axios.delete(`${url}/${e.target.id}`)
         .then(response => this.setState({friends: response.data}))
         .catch(err => console.log(err));
  }
  componentDidMount(){
      axios
          .get(url)
          .then(person => {
              this.setState({friends: person.data, loading: false})
          })
          .catch(err => console.log(err));
  }
  render(){
      return(
        <Body>
            <Links>
                <Link to="/friends">Meet my Friends!</Link>
            </Links>
            <Input>
              <Route exact path="/friends"
                        render={(props) => <NewFriend {...props} newFriend={this.addNewFriend}
                                                                 change={this.handleChange} />} />
            </Input>
            <div>
                <Route path="/friends"
                      render={(props) => <FriendList {...props} friends={this.state.friends}
                                                                loading={this.state.loading}
                                                                delete={this.deleteFriend}
                                                                update={this.updateFriend} />} />
            </div>
          </Body>
      )
    }
}

export default App;
