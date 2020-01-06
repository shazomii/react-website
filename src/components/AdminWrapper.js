import React, { Component } from "react";
import "./assets/css/admin.css";

import classNames from "classnames";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  withStyles,
  Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Sidebar from "./Common/SideBar";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  appBarSpace: theme.mixins.toolbar,
  drawerPaper: {
    position: "relative",
    whiteSpace: "noWrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "auto"
  }
});

class AdminWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerOpen = e => {
    this.setState({ open: true });
  };

  handleDrawerClose = e => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="admin-page" className={classes.root}>
        <AppBar
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              {"Admin Dashboard"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          variant="permanent"
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpace} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(AdminWrapper);
