import React from "react";

const Friends = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Friend Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
          {/* this point down will be mapped and filled with information */}
          {/* {console.log(props.friendList)} */}
          {props.friendsList.map(each =>  {
            
            return(
              <tr key={each.id} className="friend">
              <td>{each.name}</td>
              <td>{each.age}</td>
              <td>{each.email}</td>
            </tr>
          )
          })}

        </tbody>
      </table>
    </div>
  );
};

export default Friends;
