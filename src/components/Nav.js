import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setLoggedInUser } from "../actions/authedUser";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-items flex large bolder">
          <div className="persona">
            <img src={this.props.imageUrl} alt="ProfileImage" /> Hello{" "}
            {this.props.userName}
          </div>

          <nav className="nav flex center">
            <ul className="flex">
              <li>
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" activeClassName="active">
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

          <p className="logout" onClick={this.logout}>
            Logout
          </p>
        </div>
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
