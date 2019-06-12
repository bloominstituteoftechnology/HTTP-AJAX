import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 40%;
  margin: 2rem auto;

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:nth-child(odd) {
    color: black;
  }

  tr:nth-child(even) {
    color: black;
  }

  tr:hover {
    background-color: rgba(15, 14, 14, 0.014);
  }
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #d0ceba;
    color: white;
    padding: 0;
  }

  td:first-child {
    font-weight: bold;
  }
`;

const LinkStyle = styled(Link)`
  margin: 0 auto;
  text-decoration: none;
  width: max-content;
  padding: 1rem 2rem;
  outline: none;
  color: white;
  background-color: blue;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
      color: blue;
      background-color: white;
  }
`;

class ShowFriends extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    this.getAllFriends();
  }

  getAllFriends = async () => {
    try {
      const allFriends = await axios.get("http://localhost:5000/friends");
      this.setState({ friends: allFriends.data });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    console.log(this.state.friends);
    return (
      <Div>
        <h2>Friend List </h2>
        <Section>
          {this.state.friends.map(friend => (
            <Table key={friend.id}>
              <thead>
                <tr>
                  <th colspan="2">
                    <h4>{friend.name}</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>{friend.age}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{friend.email}</td>
                </tr>
              </tbody>
            </Table>
          ))}
        </Section>
        <LinkStyle to='/add'>Add New Friends</LinkStyle>
      </Div>
    );
  }
}

export default ShowFriends;
