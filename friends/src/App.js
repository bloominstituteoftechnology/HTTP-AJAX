import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Friends from './components/Friends';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HTTP-AJAX Friends</h1>
        </header>
        <p className="App-intro">
          This is Amanda's Friends project for HTTP/AJAX.
        </p>
      </div>
    );
  }
  // 
  // componentDidMount() {
  //   axios
  //       .get(`http://localhost:5000/friends/`)
  //       .then(response => {
  //           this.setState({ notes: response.data });
  //       })
  //       .catch(err => {
  //           console.log(err);
  //       });
  // }

  // handleTextInput = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // saveNoteData = () => {
  //     const note = { title: this.state.title, textBody: this.state.textBody };
  //     axios
  //         .post(`http://localhost:5000/friends/`, note)
  //         .then(savedNote => {
  //             console.log(savedNote);
  //         })
  //         .catch(err => {
  //             console.log(err);
  //         });
  //     this.setState({ title: '', textBody: '' });
  // };

  // render() {
  //   return (
  //       <div className="App">
  //           <input
  //               type="text"
  //               onChange={this.handleTextInpurt}
  //               placeholder="textBody"
  //               name="textBody"
  //               value={this.state.textBody}
  //           />
  //           <button onClick={this.saveNoteData}>Save Note</button>
  //       </div>
  //   );
  // }
}

export default App;