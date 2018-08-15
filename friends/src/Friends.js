import React from "react";

const Friends = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="3">Friends Table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Friends;
