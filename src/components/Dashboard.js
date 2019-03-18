import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Navigation from "./Nav";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import Poll from "./Poll";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation
          userName={this.props.authedUser}
          imageUrl={
            this.props.users.find(u => u.id === this.props.authedUser).avatarURL
          }
        />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/question/:question" component={Poll} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
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

export default withRouter(connect(mapStateToProps)(Dashboard));
