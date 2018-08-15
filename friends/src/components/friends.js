import React from "react";

const Friends = (props) => {
  return(

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
                <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.email}</td>
                </tr>
            </tbody>
        </table>

    </div>
    
  );
};

export default Friends;
