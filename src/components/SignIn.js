import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setLoggedInUser } from "../actions/loggedInUser";
class SignIn extends Component {
  state = {
    loggedInUser: null,
    toHome: false
  };

  getOptions = () => {
    let options = [];
    Object.entries(this.props.users).forEach(user => {
      options.push({ key: user[0], text: user[1]["name"] });
    });
    return options;
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">Would You Rather?</div>
        <div className="login">
          <Dropdown
            className="loginDropdown"
            label="Login"
            ariaLabel="Login"
            placeholder="Select a user"
            onChange={this.changeState}
            options={this.getOptions()}
            required={true}
          />
          <PrimaryButton
            disabled={!this.state.loggedInUser}
            onClick={this.saveUser}
          >
            <p>Login</p>
          </PrimaryButton>
        </div>
      </React.Fragment>
    );
  }

  saveUser = () => {
    const { dispatch } = this.props;
    const { loggedInUser } = this.state;
    dispatch(setLoggedInUser(loggedInUser));
    this.props.history.push("/home");
  };

  changeState = (event, item) => {
    this.setState({ loggedInUser: item.key });
  };
}

function mapStateToProps({ users }) {
  return {
    users: users
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));
