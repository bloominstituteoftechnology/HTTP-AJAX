import React from "react";
import { Jumbotron } from "reactstrap";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="homeDiv">
          <h1 className="display-3">Friends Project</h1>
          <p className="lead borderP">
            This is the landing page for Angelina La Salle's HTTP-AJAX Friends
            Project. This web application fulfills the MVP and stretch
            requirements.
          </p>
          <hr className="my-2" />
          <p>
            To navigate this web app, you can utilize the navigation bar at the
            top of the page; the All Friends button will take you to the the
            friends page - which gives you access to every friend - or you can
            use the Friends dropdown button to navigate to a specific friend's
            page. On the friends page, you can add and delete friends as you
            wish; you can also navigate to a specific page by clicking on the
            name of that friend within this page. If you want to update the info
            about a friend, you can do so on their individual page.
          </p>
        </Jumbotron>
      </div>
    );
  }
}
