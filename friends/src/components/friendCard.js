import React, { Component  } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import UpdateIcon from "@material-ui/icons/Update";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
// import {Route} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import Forms from "./form";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: theme.spacing.unit * 3,
    width: "50%",
    margin: "0 auto"
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  icon: {
    cursor: "pointer"
  }
});
class FriendCard extends Component {

    render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {this.props.name} Profile
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {this.props.age}
            </Typography>
            <Typography component="p">{this.props.email}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
            <Button onClick={this.props.deleteFriend(this.props.id)}>
              <DeleteOutlinedIcon className={classes.icon} />
            </Button>
            <Button onClick={this.clickHander}>
              <UpdateIcon className={classes.icon} />
            </Button>
          </CardActions>
            </Card>
            <h3>Update Friend</h3>
      <Forms updateFriend={this.props.updateHandler}/>

      </div>
    );
  }
}
FriendCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FriendCard);
