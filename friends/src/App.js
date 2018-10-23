import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  root: {
    width: "70%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "0 auto"
  },
  table: {
    minWidth: 700
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#EEEEEE",
    }
  }
});


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
    
  }
  
  componentDidMount() {
    Axios.get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(
          "I will catch you my pretty! And your little dog too!",
          err
        );
      });
  }
  
  render() {
    const { classes } = this.props

    return <div className="App">
        <h1>Friends</h1>
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>Name</TableCell>
              <TableCell className={classes.head} numeric>Age</TableCell>
              <TableCell className={classes.head}>Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.state.friends.map(friend => {
                return <TableRow className={classes.row} key={friend.id}>
                    <TableCell component="th" scope="row">
                      {friend.name}
                    </TableCell>
                    <TableCell numeric>{friend.age}</TableCell>
                    <TableCell component="th" scope="row">
                      {friend.email}
                    </TableCell>
                  </TableRow>;
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>;
  }
}

export default withStyles(styles)(App);
