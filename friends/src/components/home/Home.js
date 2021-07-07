import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to My Friends</h1>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
