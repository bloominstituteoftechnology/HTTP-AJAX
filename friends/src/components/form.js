import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Input, Button, FormGroup } from "@material-ui/core";

const styles = theme => ({
  container: {
      display: "flex",
      flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center"
  },
  input: {
      margin: theme.spacing.unit * 4,
      width:"15%"
  }
});

const Forms = props => {
  const { classes } = props;
  return (
    <>
      <FormGroup className={classes.container}>
        <Input
          onChange={props.handleChange}
          name="name"
          value={props.name}
          type="text"
          placeholder="Name"
          className={classes.input}
        />{" "}
        {""}
        <Input
          onChange={props.handleChange}
          name="age"
          value={props.age}
          type="number"
          placeholder="age"
          className={classes.input}
        />{" "}
        <Input
          onChange={props.handleChange}
          name="email"
          value={props.email}
          type="email"
          placeholder="Email"
          className={classes.input}
        />
      </FormGroup>
          <Button onClick={props.addNewFriend}> Add</Button>


    </>
  );
};

Forms.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Forms);
