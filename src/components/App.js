import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { isEmpty } from "../utils/helper";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="app">
            <div className="flex center column">
              {this.props.users &&
                this.props.users.length > 0 &&
                !this.props.authedUser && <SignIn />}
            </div>
            {this.props.authedUser ? <Dashboard /> : null}
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    }
  };
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
