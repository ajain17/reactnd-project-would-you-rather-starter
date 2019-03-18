import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setLoggedInUser } from "../actions/authedUser";
class SignIn extends Component {
  state = {
    authedUser: null,
    toHome: false
  };

  getOptions = () => {
    let options = [];
    this.props.users.forEach(user => {
      options.push({ key: user.id, text: user.name });
    });
    return options;
  };
  componentDidMount() {
    console.log("mount", this.props);
  }

  componentDidUpdate() {
    console.log("update", this.props.match);
  }

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
            disabled={!this.state.authedUser}
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
    const { authedUser } = this.state;
    dispatch(setLoggedInUser(authedUser));
  };

  changeState = (event, item) => {
    this.setState({ authedUser: item.key });
  };
}

function mapStateToProps({ users }) {
  return {
    users: users
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));
