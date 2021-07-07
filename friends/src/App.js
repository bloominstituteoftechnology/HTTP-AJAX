import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './Home';


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

  updateFriends = () => {
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

  delete = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data,
        })
      })
      .catch(console.log)
  }

	render() {
		return (
			<AppDiv className="App">
        <WrapperDiv>
          <Route path="/" render={props => <Home {...props} friends={this.state.friends} updateFriends={this.updateFriends} delete={this.delete} />} />
        </WrapperDiv>
			</AppDiv>
		);
	}
}

export default App;
