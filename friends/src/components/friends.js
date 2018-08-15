import React from "react";
import friends from "../../server";

const Friends = () => {
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
            </tbody>
        </table>
    
        {console.log(friends)}
    </div>
    
  );
};

export default Friends;
