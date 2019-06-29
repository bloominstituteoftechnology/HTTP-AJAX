import React from "react";

function DisplayPanel(props) {
  console.log("------in display panel.....");
  return (
    <div className="friend-display-card">
    <h3>
      Name: <input type="text" />
    </h3>
    <p>
      Age: <input type="text" />
    </p>
    <p>
      Email: <input type="text" />
    </p>
    <div className="app-button">Submit</div>
    </div>
  );
}
export default DisplayPanel;