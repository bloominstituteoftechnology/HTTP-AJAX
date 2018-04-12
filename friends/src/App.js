import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendList";
import FriendCard from "./components/FriendCard";
import { Jumbotron, Container } from 'reactstrap';

export default class App extends Component {
	// constructor() {
	//   super();
	//   this.state = {
	//     friends: []
	//   };
	// }

	render() {
		return (
			<div className="App">
			<div>
      <Jumbotron fluid>
			<Container className="text-success" fluid>
        <h1 className="display-3">Ryan's Friendlist</h1>
        <p className="lead">With apps like these, who has time for friends?</p>
      </Container>
    </Jumbotron>
    </div>
				{/* Routes Here */}
				<Switch>
					<Route exact path="/" component={FriendList} />
					<Route path="/friend/:id" component={FriendCard} />
					<Route
						component={() => <h1>Invalid! URL GO BACK HOME</h1>}
					/>
				</Switch>
			</div>
		);
	}
}
