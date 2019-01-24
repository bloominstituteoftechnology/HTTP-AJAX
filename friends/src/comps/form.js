import React from 'react';
import axios from 'axios';
import './styles/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.location.pathname === `/friends/${this.props.id}/edit`) {
      this.setState({
        edit: true,
        name: this.props.name,
        age: this.props.age,
        email: this.props.email,
      });
    }
  }

  timeout = () =>
    setTimeout(() => {
      this.props.history.push('/friends');
    }, 1500);

  captureInput = e => {
    this.setState({edit: false});
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  theSubmit = e => {
    if (this.props.location.pathname === '/signup') {
      e.preventDefault();
      let newUser = Object.assign(this.state);
      if (newUser.name && newUser.age && newUser.email) {
        newUser.age = Number(newUser.age);
        newUser.id = this.props.newId;
        axios
          .post('http://www.localhost:5000/friends', newUser)
          .then(res => {
            console.log(res);
            this.setState({successMessage: 'Friend added Successfully'});
            this.props.updateState(res);
          })
          .catch(err => console.log(err));
      }
      this.timeout();
    } else {
      console.log(this.props.location.pathname);
      e.preventDefault();
      let newUser = Object.assign(this.state);
      if (newUser.name && newUser.age && newUser.email) {
        newUser.age = Number(newUser.age);
        axios
          .put(
            `http://www.localhost:5000/friends/${this.props.match.params.id}`,
            {
              name: this.state.name,
              age: this.state.age,
              email: this.state.email,
            },
          )

          .then(res => {
            console.log(res);
            this.setState({successMessage: 'Friend Changed Successfully'});
            this.props.updateState(res);
          })
          .catch(err => console.log(err));
      }
      this.timeout();
    }
  };

  render() {
    return (
      <div className="formCont">
        <form className="form" onSubmit={this.theSubmit}>
          <div className="name">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="name"
              onChange={this.captureInput}
              value={this.state.edit === true ? this.props.name : null}
            />
          </div>
          <div className="age">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              id="age"
              onChange={this.captureInput}
              value={this.state.edit === true ? this.props.age : null}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              onChange={this.captureInput}
              value={this.state.edit === true ? this.props.email : null}
            />
          </div>
          <button>Submit</button>
        </form>
        {this.state.successMessage ? (
          <div>{this.state.successMessage}</div>
        ) : null}
      </div>
    );
  }
}

export default Form;
