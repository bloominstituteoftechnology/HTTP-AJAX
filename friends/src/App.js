import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 62.5%;
}
`;

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
      <>
        <GlobalStyle />
        <BodyTag className="App">
          <header className="App-header">
            <h1>Friends List:</h1>
            <FriendsList />
          </header>
        </BodyTag>
      </>
    );
  }
}

export default App;
