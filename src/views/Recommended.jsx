import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    color:'#11A8FD'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Recommendation() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={9}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />{" "}
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
}

export default Recommendation;
