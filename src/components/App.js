import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
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
