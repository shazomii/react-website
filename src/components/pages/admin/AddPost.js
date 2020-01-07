import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../../store/actions/adminActions";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { withStyles, Paper, Button } from "@material-ui/core";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  container: {
    margin: theme.spacing(3)
  },
  form: {
    margin: theme.spacing(2),
    display: "flex"
  },
  leftSide: {
    flex: 4,
    height: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(3)
  },
  rightSide: {
    flex: 1,
    height: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(3)
  }
});

class AddPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h1>Add Post</h1>
        <Form className={classes.form}>
          <Paper className={classes.leftSide}>
            <FormikTextField
              name="title"
              label="Title"
              margin="normal"
              fullWidth
              onChange={e => {
                this.props.setFieldValue(
                  "slug",
                  e.target.value.toLowerCase().replace(/ /g, "_")
                );
              }}
            />
            <FormikTextField
              name="slug"
              label="slug"
              margin="normal"
              fullWidth
            />
            <FormikTextField
              name="content"
              label="Content"
              margin="normal"
              fullWidth
            />
          </Paper>
          <Paper className={classes.rightSide}>
            <FormikSelectField
              name="status"
              label="Status"
              margin="normal"
              fullWidth
              options={[
                { label: "Unpublished", value: false },
                { label: "Published", value: true }
              ]}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.handleSubmit}
            >
              <SaveIcon />
              {"Save"}
            </Button>
          </Paper>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      title: "",
      slug: "",
      createdAt: "",
      status: false,
      content: ""
    }),
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required!"),
      slug: Yup.string().required(),
      content: Yup.string().required()
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      console.log("saving", props.addPost());
    }
  })(withStyles(styles)(AddPost))
);
