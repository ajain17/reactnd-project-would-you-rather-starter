import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Nav";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation userName={this.props.authedUser} />
        </Router>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);
