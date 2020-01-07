import React, { Component } from "react";
import TableView from "../../Common/TableView";
import { Link as RouterLink } from "react-router-dom";
import * as AdminActions from "../../../store/actions/adminActions";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { Fab, withStyles } from "@material-ui/core";

const columns = [
  { label: "ID", name: "id" },
  { label: "Title", name: "title" },
  { label: "Content", name: "content" }
];

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: "50px",
    right: "50px"
  }
});

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }

  render() {
    const posts = this.props.admin.posts;
    const { classes } = this.props;
    return (
      <div>
        <h1>{"Posts"}</h1>
        <TableView columns={columns} rows={posts} />
        <Fab
          component={RouterLink}
          to="/admin/posts/add"
          color="secondary"
          aria-label="add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    admin: state.admin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: token => {
      dispatch(AdminActions.getPosts(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Posts));
