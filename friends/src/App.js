import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Friends from './Friends';
import Nav from './Nav';


const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentWillMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(response => {
				console.log(response);
				this.setState({
					friends: response.data,
				});
			})
			.catch(err => console.log(err));
    }

  updateAPI = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data,
        });
      })
      .catch(err => console.log(err));
    }

	render() {
		return (
			<AppDiv className="App">
        <Nav />
        <WrapperDiv>
          <Route exact path="/" render={props => <Home {...props} friends={this.state.friends} updateAPI={this.updateAPI} />} />
          <Route exact path="/friends" render={props => <Friends {...props} friends={this.state.friends} />} />
          <Route exact path="/add" render={props => <Form {...props} updateAPI={this.updateAPI} />} />
        </WrapperDiv>
			</AppDiv>
		);
	}
}

export default App;
