import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, {css} from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem;
`;

const TableWrapper = styled.div`
  width: 27%;
  padding-bottom: 1rem;
  margin: 1rem;
  box-shadow: 2px 2px 2px #393933;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  margin-bottom: .5rem;

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
    font-size: 1.5rem;
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
  background-color: #393933;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const Button = styled.button`
 margin: 0 auto;
  text-decoration: none;
  width: max-content;
  padding: .8rem 1.4rem;
  margin: 0 1rem;
  outline: none;
  color: white;
  background-color: blue;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: grey;
  }
  ${props => props.delete && css`
  background-color: red;
  &:hover {
    background-color: white;
    color: red;
  }
  `}
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
            <TableWrapper>
              <Table key={friend.id}>
                <thead>
                  <tr>
                    <th colspan="3">
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
                  <tr>
                    <td>Location</td>
                    <td>{friend.location}</td>
                  </tr>
                </tbody>
              </Table>
              <Button>Update</Button>
              <Button delete>Delete</Button>
            </TableWrapper>
          ))}
        </Section>
        <LinkStyle to="/add">Add New Friends</LinkStyle>
      </Div>
    );
  }
}

export default ShowFriends;
