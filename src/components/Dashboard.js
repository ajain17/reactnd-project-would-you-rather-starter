import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Nav";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation
            userName={this.props.authedUser}
            imageUrl={
              this.props.users.find(u => u.id === this.props.authedUser)
                .avatarURL
            }
          />
        </Router>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default connect(mapStateToProps)(Dashboard);
