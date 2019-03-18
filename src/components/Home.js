import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
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
    let { answered, unanswered } = this.state;
    return (
      <div className="container flex center">
        <div className="sections flex">
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
        <div className="sections section-content flex">
          {this.state.showAnswered ? (
            <ul>
              {answered &&
                answered.map(q => (
                  <li key={q.id}>
                    <AnsweredQuestion question={q} />
                  </li>
                ))}
            </ul>
          ) : (
            <ul>
              {unanswered &&
                unanswered.map(q => (
                  <li key={q.id}>
                    <UnansweredQuestion question={q} />
                  </li>
                ))}
            </ul>
          )}
        </div>
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

    this.setState({ answered, unanswered });
  };
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser: authedUser,
    questions: questions,
    users: users
  };
}

export default connect(mapStateToProps)(Home);
