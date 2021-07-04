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
  height: 1000px;
`

const Header = styled.header`
  font-size: 3rem;
  font-weight: 900;
  color: coral;
  width: 200px;
  margin: 0 auto;
  padding: 10rem 0;
  text-align: center;
`

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: orange;
  text-decoration: none;
  color: black;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1rem;
  font-weight: 600;
  background: lightblue;
`;

const Home = () => {
  return (
    <Header> Would you like to meet my friends?</Header>
  )
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        loading: true,
        id:'',
        name: '',
        age: null,
        email: '',
        date: '',
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
            email: this.state.email,
            date: this.state.date,
          })
         .then(response => this.setState({friends: response.data}))
         .catch(err => console.log(err));
  }
  updateFriend = e => {
    axios.put(`${url}/${e.target.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            date: this.state.date,
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
          .then(response => {
              this.setState({friends: response.data, loading: false})
          })
          .catch(err => console.log(err));
  }
  render(){
    console.log(this.state.friends)
    console.log(this.state.date)
      return(
        <Body>
            <Links>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/friends"><Button>Yes!</Button></Link>
            </Links>
            <Route exact path="/" component={Home} />
            <Route exact path="/friends"
                      render={(props) => <NewFriend {...props} newFriend={this.addNewFriend}
                                                               change={this.handleChange} />} />
            <Route exact path="/friends"
                  render={(props) => <FriendList {...props} friends={this.state.friends} loading={this.state.loading}
                                                            delete={this.deleteFriend} update={this.updateFriend} />} />
            <Links />
          </Body>
      )
    }
}

export default App;
