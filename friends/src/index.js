import React from 'react';
import {BrowserRouter as Router,withRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



const rootElement = document.getElementById('root');
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);