import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import AdminWrapper from "./components/AdminWrapper";
import Dashboard from "./components/pages/admin/Dashboard";
import LoginWrapper from "./components/LoginWrapper";
import Posts from "./components/pages/admin/Posts";
import Users from "./components/pages/admin/Users";
import AddPost from "./components/pages/admin/AddPost";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact={true}
          path="/admin"
          render={props => {
            return (
              <div>
                {this.props.auth.token ? (
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                ) : (
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                )}
              </div>
            );
          }}
        />

        <Route
          path="/admin/users"
          render={props => {
            return (
              <div>
                {this.props.auth.token ? (
                  <AdminWrapper>
                    <Users />
                  </AdminWrapper>
                ) : (
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                )}
              </div>
            );
          }}
        />

        <Route
          path="/admin/posts/add"
          render={props => {
            return (
              <div>
                {this.props.auth.token ? (
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                ) : (
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                )}
              </div>
            );
          }}
        />

        <Route
          exact={true}
          path="/admin/posts"
          render={props => {
            return (
              <div>
                {this.props.auth.token ? (
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                ) : (
                  <LoginWrapper>
                    <Login />
                  </LoginWrapper>
                )}
              </div>
            );
          }}
        />

        <Route
          exact={true}
          path="/"
          render={props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/about"
          render={props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/contact"
          render={props => (
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
