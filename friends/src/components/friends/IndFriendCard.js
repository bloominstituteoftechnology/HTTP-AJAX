import React, { Fragment } from "react";

import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";
import "./Friend.css";

// works sort of
// const IndFriendCard = props => {
//   let name = props;
//   for (let i = 0; i < props.data.length; i++) {
//     name = props.data[i].name;
//     console.log(props.data[i].name);
//   }
//   console.log("IndFriendCardRoute", props.match.params.name);
//   return (
//     <Fragment>
//       <div className="individualCard">
//         <h2>Hey</h2>
//         <h2>{name}</h2>

//         <EditDeleteButtons data={props.data} />
//       </div>
//     </Fragment>
//   );
// };
// end working

const IndFriendCard = props => {
  // let name = props;
  // for (let i = 0; i < props.data.length; i++) {
  //   name = props.data[i].name;
  //   console.log(props.data[i].name);
  // }
  let indName = "";
  let age = 0;
  let email = "";
  console.log("IndFriendCardRoute", props.match.params.name, props.data);
  for (let i = 0; i < props.data.length; i++) {
    let name = props.data[i].name;
    let activeName = props.match.params.name;
    if (activeName === name) {
      console.log("Match");
      indName = name;
      age = props.data[i].age;
      email = props.data[i].email;
    }
  }
  return (
    <Fragment>
      <div className="individualCard">
        <h2>Hey</h2>
        <h2>{indName}</h2>
        <h2>{age}</h2>
        <h2>{email}</h2>

        <EditDeleteButtons data={props.data} />
      </div>
    </Fragment>
  );
};

// class IndFriendCard extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Ind Props", props.data);
//     this.state = {
//       data: props.data,
//       props: props,
//       name: ""
//     };
//   }
//   // for (let i = 0; i < props.data.length; i++) {
//   //   name = props.data[i].name;
//   //   console.log(props.data[i].name);
//   // }
//   // console.log("IndFriendCardRoute", props.match.params.name);
//   render() {
//     // for (let i = 0; i < this.state.data; i++) {
//     //   let clickedName = this.state.props.match.params.name;
//     //   let friendName = this.state.data;
//     //   console.log("Clicky", clickedName);
//     //   console.log("friendName", friendName);
//     //   if (friendName[i].name === clickedName) {
//     //     console.log("Clicked name", clickedName);
//     //     this.setState({ name: this.state.props.match.params.name });
//     //   }
//     // }
//     // console.log("Testing 5", clickedName);
//     // {
//     //   for (let i = 0; i < this.state.data; i++) {
//     //     let clickedName = this.state.props.match.params.name;
//     //     let friendName = this.state.data;
//     //     console.log("Clicky", clickedName);
//     //     console.log("friendName", friendName);
//     //     if (friendName[i].name === clickedName) {
//     //       console.log("Clicked name", clickedName);
//     //       this.setState({ name: this.state.props.match.params.name });
//     //     }
//     //   }
//     // }
//     // {
//     //   for (let i = 0; i < this.state.data; i++) {
//     //     let clickedName = this.state.props.match.params.name;
//     //     let friendName = this.state.data;
//     //     console.log("Clicky", clickedName);
//     //     console.log("friendName", friendName);
//     //     if (friendName[i].name === clickedName) {
//     //       console.log("Clicked name", clickedName);
//     //       this.setState({ name: this.state.props.match.params.name });
//     //     }
//     //   }
//     // }
//     return (
//       <Fragment>
//         {/* {this.state.data.map(friend => (
//           <div className="individualCard">
//           <h2>Hey</h2>
//           <h2>{friend.name}</h2>

//           <EditDeleteButtons data={this.state.data} />
//           </div>
//         ))} */}
//         <div className="individualCard">
//           <h2>Hey</h2>
//           <h2>{this.state.name}</h2>

//           <EditDeleteButtons data={this.state.data} />
//         </div>
//       </Fragment>
//     );
//   }
// }

// class IndFriendCard extends React.Componet {
//   constructor(props) {
//     super(props);
//     this.state={
//       name: props.data[i].name
//     }
//   }
//   let name = "";
//   for (let i = 0; i < props.data.length; i++) {
//     name = props.data[i].name;
//     console.log(props.data[i].name);
//     // props.name = props.data[i].name;
//     // if (props.data[i].name.includes(props.match.params.name)) {
//     //   console.log(
//     //     "match occurded at index of "
//     //     // props.indexOf(props.match.params.name)
//     //   );
//     // } else {
//     //   // do nothing
//     // }
//   }
//   console.log("IndFriendCardRoute", props.match.params.name);
//   return (
//     <Fragment>
//       {/* <Route
//         path={`/friends/${props.friends}`}
//         render={props => <IndFriendCard {...props} data={props.data} />}
//       /> */}
//       {/* {props.data.map(friend => {
//         <div className="individualCard">
//           <h2>Hey</h2>
//           <h3>{friend.name}</h3>

//           <EditDeleteButtons data={props.data} />
//         </div>;
//       })} */}
//       <div className="individualCard">
//         <h2>Hey</h2>
//         <h2>{name}</h2>

//         <EditDeleteButtons data={props.data} />
//       </div>
//     </Fragment>
//   );
// };

export default IndFriendCard;
