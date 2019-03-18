import React, { Component } from "react";
import { connect } from "react-redux";
import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup";
import { PrimaryButton } from "office-ui-fabric-react";
export class Poll extends Component {
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
    console.log("route", this.props.match);
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
                  key: "A",
                  text: ques.optionOne.text
                },
                {
                  key: "B",
                  text: ques.optionTwo.text
                }
              ]}
              onChange={this._onChange}
              label="Would you Rather?"
            />
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
    this.setState({ answer: option.text });
  };

  _saveAnswer = () => {
    console.log("save", this.state.answer);
  };
}

function mapStateToProps({ loggedInUser, questions, users }) {
  return {
    loggedInUser: loggedInUser,
    questions: questions,
    users: users
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
