import React, { Component } from "react";
import { connect } from "react-redux";
import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup";
import { PrimaryButton } from "office-ui-fabric-react";
import { handleSaveAnswer } from "../actions/questions";
class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      question: null
    };
  }

  componentDidMount() {
    console.log("mounted");
    let questionId = this.props.match.params
      ? this.props.match.params.question
      : "";

    if (this.props.questions[questionId] !== null) {
      this.setState({ question: this.props.questions[questionId] });
    }
  }

  render() {
    let ques = this.state.question;
    return (
      <div className="poll">
        {ques !== null && (
          <React.Fragment>
            <h2>{ques.author} asks:</h2>
            <h1>Would you rather....</h1>
            <ChoiceGroup
              options={[
                {
                  key: "optionOne",
                  text: ques.optionOne.text
                },
                {
                  key: "optionTwo",
                  text: ques.optionTwo.text
                }
              ]}
              onChange={this._onChange}
              label="Would you Rather?"
            />
            <hr />
            <PrimaryButton
              disabled={!this.state.answer}
              text="Submit"
              onClick={this._saveAnswer}
            />
          </React.Fragment>
        )}
      </div>
    );
  }

  _onChange = (ev, option) => {
    console.log("chosen", option);
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
