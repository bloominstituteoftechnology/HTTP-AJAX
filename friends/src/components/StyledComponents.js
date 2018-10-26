import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const HomeWrapper = styled(Wrapper)`
display: flex;
flex-direction: column;
height: 500px;
border: 1px solid gray;
max-width: 300px;
width: 90%;
min-height: auto;
background: gainsboro;
a {
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 2.6rem;
    padding: 10px;
    border: 1px solid white;
    border-radius: 3%;
    background: dodgerblue;
}

`;
