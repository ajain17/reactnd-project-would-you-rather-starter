import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import App from "./App";
import Navigation from "./Nav";
import { NavLink, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { setLoggedInUser } from "../actions/authedUser";

class Dashboard extends Component {
  componentDidMount() {
    console.log("mount", this.props.match);
  }

  componentDidUpdate() {
    console.log("update", this.props.match);
  }

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
          <Route path="/question/:question/:answered" component={Poll} />
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
