import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionTile from "./QuestionTile";
import { withRouter } from "react-router-dom";
export class Home extends Component {
  state = {
    answered: null,
    unanswered: null,
    showAnswered: false,
    showUnanswered: true
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
      <div className="container flex center">
        <div className="sections flex center">
          <h1
            onClick={this.showUnanswered}
            className={this.state.showUnanswered ? "active" : ""}
          >
            Unanswered Questions
          </h1>
          <h1
            onClick={this.showAnswered}
            className={!this.state.showUnanswered ? "active" : ""}
          >
            Answered Questions
          </h1>
        </div>

        <QuestionTile
          questions={
            this.state.showAnswered
              ? this.state.answered
              : this.state.unanswered
          }
          answered={this.state.showAnswered}
        />
      </div>
    );
  }

  showAnswered = () => {
    this.setState({ showAnswered: true, showUnanswered: false });
  };

  showUnanswered = () => {
    this.setState({ showAnswered: false, showUnanswered: true });
  };

  setQuestions = () => {
    let answered = [];
    let unanswered = [];
    this.props.questions.forEach(q => {
      let votes = [...q.optionOne.votes, ...q.optionTwo.votes];
      if (!votes.includes(this.props.authedUser)) {
        unanswered.push(q);
      } else {
        answered.push(q);
      }
    });

    answered.sort((a, b) => b.timestamp - a.timestamp);
    unanswered.sort((a, b) => b.timestamp - a.timestamp);
    this.setState({ answered, unanswered });
  };
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser: authedUser,
    questions: questions
  };
}

export default withRouter(connect(mapStateToProps)(Home));
