import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';
import { addFriend } from './actions';
import FriendList from './components/Friends.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const email = form.email.value;
    this.props.addFriend({name, age, email});
    return false;
  }

  render() {
    return (
      <div className="app">
        <div className="add-friend">
          <form onSubmit={this.onSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td><input type="text" name="name" /></td>
                </tr>
                <tr>
                  <td>Age: </td>
                  <td><input type="number" name="age" /><br /></td>
                </tr>
                <tr>
                  <td>Email: </td>
                  <td><input type="email" name="email" /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><input type="submit" value="Submit" /></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <FriendList />
      </div>
    );
  }
}

export default connect(null, { addFriend })(App);
