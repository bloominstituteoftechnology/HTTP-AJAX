import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.div`
  background-color: #2e1f27;
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;

  &:hover {
    background-color: #41333a;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover{
        color: grey;
    }
  }
`;

const Header = () => {
  return (
    <Head>
      <Link to="/">Friend Zone</Link>
    </Head>
  );
};

export default Header;
