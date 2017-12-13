import React, { Component } from 'react';
import { getFriends, addFriend, updateFriend, deleteFriend } from '../actions';
import { connect } from 'react-redux';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleElementTextUpdate = this.handleElementTextUpdate.bind(this);
    this.updateFriend = this.updateFriend.bind(this);
  }

  handleNameChange = (event) => {
    return this.setState({ name: event.target.value })
  }

  handleAgeChange = (event) => {
    return this.setState({ age: event.target.value })
  }

  handleEmailChange = (event) => {
    return this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({name: '', age: '', email: ''});
  }

  handleElementTextUpdate(event) {
    let element = event.target;
    let text = element.innerHTML;
    element.style.display = "none";
    let input = document.createElement("input");
    input.type = "text";
    input.value = text;
    input.size = Math.max(text.length / 4 * 3, 4);
    element.parentNode.insertBefore(input, element);
    input.select();
    
    input.addEventListener("blur", (event) => {
      event.target.parentNode.removeChild(event.target);
      element.innerHTML = input.value === "" ? "&nbsp;" : input.value;
      element.style.display = "";
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    let index = event.target.dataset.param;
    let parent = event.target.parentNode;
    this.setState({
      name: parent.querySelector("span[class='name']").innerHTML, 
      age: parent.querySelector("span[class='age']").innerHTML, 
      email: parent.querySelector("span[class='email']").innerHTML 
    }, () => {
      this.updateFriend({ index, update: this.state })
    });
  }

  handleDelete(event) {
    event.preventDefault();
    let index = event.target.dataset.param;
    this.props.deleteFriend({ index });
  }

  updateFriend(data) {
    this.props.updateFriend(data);
    this.setState({name: '', age: '', email: ''});
  }
  
  componentDidMount() {
    this.props.getFriends();
  }
  
  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit } >
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" placeholder="Add Name..." onChange={ this.handleNameChange } value={ this.state.name } />
          <label htmlFor="age">Age: </label>
          <input id="age" type="number" placeholder="Add Age..." onChange={ this.handleAgeChange } value={ this.state.age } />
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" placeholder="Add Email..." onChange={ this.handleEmailChange } value={ this.state.email } />
          <input type="submit" value="Submit"/> 
        </form>

        <ul>
        {
          this.props.friends.map((friend, index) => {
            return (
              <li key={index}>
                <span onClick={ this.handleElementTextUpdate } className="name">{ friend.name }</span>
                <span onClick={ this.handleElementTextUpdate } className="age">{ friend.age }</span>
                <span onClick={ this.handleElementTextUpdate } className="email">{ friend.email }</span>
                <input type="submit" value="Update" data-param={index} onClick={ this.handleUpdate } />
                <input type="submit" value="Delete" data-param={index} onClick={ this.handleDelete } />
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStoreToProps, { getFriends, addFriend, updateFriend, deleteFriend })(Friends);