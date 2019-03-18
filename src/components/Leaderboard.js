import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/users";
const deepcopy = require("deepcopy");
export class Leaderboard extends Component {
  state = {
    users: null
  };

  componentDidMount() {
    this.setState({ users: this.getUsers() });
  }

  componentDidUpdate(prevProps) {
    if (this.props.users && this.props.users !== prevProps.users) {
      this.setState({ users: this.getUsers() });
    }
  }

  getUsers() {
    let users = deepcopy(this.props.users);

    users.sort((a, b) => {
      let aTotal = a.questions.length + Object.keys(a.answers).length;
      let bTotal = b.questions.length + Object.keys(b.answers).length;
      return aTotal < bTotal ? 1 : -1;
    });

    return users;
  }

  render() {
    return (
      <div className="leaderboard-container">
        <h1>Leaderboard</h1>

        <div className="leaderboard">
          <table align="center">
            <tbody>
              <tr key={1}>
                <th>UserName</th>
                <th> Picture</th>
                <th>#Questions asked</th>
                <th>#Questions answered</th>
                <th>Score</th>
              </tr>
              {this.state.users &&
                this.state.users.map(user => (
                  <tr key={user.id}>
                    <td> {user.name}</td>
                    <td>
                      <img src={user.avatarURL} alt="ProfileImage" />
                    </td>
                    <td> {user.questions.length}</td>
                    <td> {Object.keys(user.answers).length}</td>
                    <td>
                      {user.questions.length + Object.keys(user.answers).length}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions: questions,
    users: users
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
