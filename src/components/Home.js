import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Nav";
import { isEmpty } from "../utils/helper";
export class Home extends Component {
  state = {
    answered: null,
    unanswered: null
  };
  componentDidMount() {
    this.setQuestions();
  }
  componentDidUpdate(prevProps) {
    if (this.props.questions && prevProps.questions !== this.props.questions) {
      this.setQuestions();
    }
  }
  render() {
    return (
      <div className="view">
        <div className="sections">
          <div className="unanswered">
            <h1>Unanswered Questions</h1>
          </div>
          <div className="answered">
            <h1>Answered Questions</h1>
          </div>
        </div>
      </div>
    );
  }

  setQuestions = () => {
    let answered = [];
    let unanswered = [];
    Object.entries(this.props.questions).forEach(q => {
      let votes = [...q[1].optionOne.votes, ...q[1].optionTwo.votes];
      if (!votes.includes(this.props.loggedInUser)) {
        unanswered.push(q);
      } else {
        answered.push(q);
      }
    });

    this.setState({ answered, unanswered });
  };
}

function mapStateToProps({ loggedInUser, questions, users }) {
  return {
    loggedInUser: loggedInUser,
    questions: questions,
    users: users
  };
}

export default connect(mapStateToProps)(Home);
