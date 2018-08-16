import React from "react";
import "../App.css";
import { Table } from "reactstrap";

const Friend = props => {
  return (
    <tbody className="colCont">
      <tr>
        <th scope="row">{props.friends.id}</th>
        <td>{props.friends.name}</td>
        <td> {props.friends.age} </td>
        <td> {props.friends.email} </td>
      </tr>
    </tbody>
  );
};

export default Friend;
