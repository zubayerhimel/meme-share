import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CollectionsIcon from "@material-ui/icons/Collections";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Nunito",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <CollectionsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">MemeVerse</Link>
          </Typography>
          <Link to="/signin">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/registration">
            <Button color="inherit">Registration</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
