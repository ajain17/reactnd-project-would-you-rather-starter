import React, { Component } from "react";
import { connect } from "react-redux";
import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup";
import { PrimaryButton } from "office-ui-fabric-react";
import { handleSaveAnswer } from "../actions/questions";
import PollResults from "./PollResults";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      question: null,
      isDisabled: false,
      showResults: false,
      defaultSelected: null
    };
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    if (this.props.questions && this.props.questions !== prevProps.questions) {
      this.initialize();
    }
  }

  initialize = () => {
    let questionId = this.props.match.params
      ? this.props.match.params.question
      : "";

    let question = this.props.questions.find(q => q.id === questionId);
    if (question) {
      this.setState({ question });
    }

    let votes = [...question.optionOne.votes, ...question.optionTwo.votes];
    if (votes.includes(this.props.authedUser)) {
      question.optionOne.votes.includes(this.props.authedUser)
        ? this.setState({ defaultSelected: "optionOne" })
        : this.setState({ defaultSelected: "optionTwo" });

      this.setState({ isDisabled: true });
    }
  };

  getUserSelection = () => {};

  render() {
    let ques = this.state.question;
    return (
      <div className="poll">
        {ques !== null && (
          <React.Fragment>
            <h2>{ques.author} asks:</h2>
            <h1>Would you rather....</h1>
            <div className="choice-group">
              <ChoiceGroup
                defaultSelectedKey={this.state.defaultSelected}
                options={[
                  {
                    key: "optionOne",
                    text: ques.optionOne.text,
                    disabled: this.state.isDisabled
                  },
                  {
                    key: "optionTwo",
                    text: ques.optionTwo.text,
                    disabled: this.state.isDisabled
                  }
                ]}
                onChange={this._onChange}
                label="Would you Rather?"
              />
            </div>
            <PrimaryButton
              className="answer-button"
              disabled={this.state.isDisabled}
              text="Submit"
              onClick={this._saveAnswer}
            />
          </React.Fragment>
        )}

        {this.state.isDisabled && (
          <div>
            <hr />
            <PollResults question={this.state.question} />
          </div>
        )}
      </div>
    );
  }

  _onChange = (ev, option) => {
    this.setState({ answer: option.key });
  };

  _saveAnswer = () => {
    console.log("save", this.state.answer, this.state.question.id);
    this.props.dispatch(
      handleSaveAnswer({
        authedUser: this.props.authedUser,
        qid: this.state.question.id,
        answer: this.state.answer
      })
    );
  };
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser: authedUser,
    questions: questions,
    users: users
  };
}

export default connect(mapStateToProps)(Poll);
