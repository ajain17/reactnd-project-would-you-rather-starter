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
    if (!question) {
      this.props.history.push("/404");
    } else {
      this.setState({ question });

      let votes = [...question.optionOne.votes, ...question.optionTwo.votes];
      if (votes.includes(this.props.authedUser)) {
        question.optionOne.votes.includes(this.props.authedUser)
          ? this.setState({ defaultSelected: "optionOne" })
          : this.setState({ defaultSelected: "optionTwo" });

        this.setState({ isDisabled: true });
      }
    }
  };

  render() {
    let ques = this.state.question;
    return (
      <div className="poll">
        {ques !== null && (
          <div className="poll-details flex center">
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
              />
            </div>

            {!this.state.isDisabled && (
              <PrimaryButton
                className="submit-button"
                text="Submit"
                onClick={this._saveAnswer}
              />
            )}
          </div>
        )}

        {this.state.isDisabled && (
          <div>
            <hr />
            <PollResults
              question={this.state.question}
              user={this.props.authedUser}
            />
          </div>
        )}
      </div>
    );
  }

  _onChange = (ev, option) => {
    this.setState({ answer: option.key });
  };

  _saveAnswer = () => {
    this.props.dispatch(
      handleSaveAnswer({
        authedUser: this.props.authedUser,
        qid: this.state.question.id,
        answer: this.state.answer
      })
    );
  };
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser: authedUser,
    questions: questions
  };
}

export default connect(mapStateToProps)(Poll);
