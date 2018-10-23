import React from "react";
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


const Friends = props => {
    const { classes } = props
    return (
        <>
      
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
                  <TableRow className={classes.row} key={props.id}>
                            <TableCell component="th" scope="row">
                                {props.name}
                            </TableCell>
                            <TableCell numeric>{props.age}</TableCell>
                            <TableCell component="th" scope="row">
                                {props.email}
                            </TableCell>
                        </TableRow>

                </TableBody>
            </Table>
        </Paper>
        </>
    )
};


export default withStyles(styles)(Friends);
