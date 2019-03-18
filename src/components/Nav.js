import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { setLoggedInUser } from "../actions/loggedInUser";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import NewQuestion from "./NewQuestion";
class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-items flex large bolder">
          <nav className="nav flex center">
            <ul className="flex">
              <li>
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/newquestion" activeClassName="active">
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard" activeClassName="active">
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="username">
            <div className="persona">Hello {this.props.userName}</div>
            <p className="logout" onClick={this.logout}>
              Logout
            </p>
          </div>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/newquestion" component={NewQuestion} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/poll/:question" component={Poll} />
        </Switch>
      </React.Fragment>
    );
  }

  logout = () => {
    const { dispatch } = this.props;
    this.props.history.push("/");
    dispatch(setLoggedInUser(null));
  };
}
export default withRouter(connect()(Navigation));
