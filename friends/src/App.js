import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import axios from 'axios';

/** My custom components */
import { CustomForm, FriendsList } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  upDate = () => {
    console.log("Hello from this.upDate");
    axios.get('http://localhost:5000/friends')
    .then( ({data}) => {
        // console.log("Axios response.data",data);
        this.setState({ friends: data });
        // console.log("this.state.friends",this.state.friends);
        }
    );
    
  }

  componentDidMount() {
    this.upDate();
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" >
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">HOME</h1>
          </Link>
        </header>
        <Container>
          {/* <Route path="/" component={CustomForm} /> */}
          <Route exact path="/" render={ props => <CustomForm {...props} upDate={this.upDate} />} />

          {/* <Route path="/:id" component={FriendCard} /> */}
          {/* <Route path="/:id" render={ props => <FriendCard {...props} friends={this.state.friends} /> } /> */}
          
          {/* <Route path='/' component={FriendsList} /> */}
          <Route path='/' render={ props => <FriendsList {...props} friends={this.state.friends} upDate={this.upDate} />} />
        </Container>
      </div>
    );
  }
}

export default App; 
