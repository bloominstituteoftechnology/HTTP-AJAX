import React from 'react';
import './App.css';
import Initial from './components/initial.js';
import Form from './components/form.js';
import { Route } from 'react-router-dom';

class App extends React.Component {
    constructor() {
	super();
	this.state = {
	    friends: []
	};
    }
    
    render() {
	return (
	    <div className="App">
              <div className="initialTotal">
		<Route exact path="/" component={Initial} />
	      </div>
	      <Route exact path="/form" component={Form} />
	    </div>
	);
    }
}

export default App;
