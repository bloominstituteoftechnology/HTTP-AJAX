import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import styled from "styled-components";

const BodyTag = styled.div`
  background-color: #0d3179;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  text-align: center;
`;
class App extends Component {
  render() {
    return (
      <BodyTag className="App">
        <header className="App-header">
          <h1>Friends List:</h1>
          <FriendsList />
        </header>
      </BodyTag>
    );
  }
}

export default App;
