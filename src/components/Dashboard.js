import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Nav";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation userName={this.props.loggedInUser} />
        </Router>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ loggedInUser, users }) {
  return {
    loggedInUser: loggedInUser,
    users: users
  };
}

export default connect(mapStateToProps)(Dashboard);
