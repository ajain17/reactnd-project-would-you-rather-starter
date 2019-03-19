import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react";
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from "react-router-dom";
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  render() {
    return (
      <div className="flex center">
        <div className="new-question-form flex column">
          <h2> Would you rather... </h2>
          <TextField
            name="optionOne"
            label="Enter option 1 (required)"
            multiline
            rows={2}
            required={true}
            onChange={this._setOptions}
          />
          <TextField
            name="optionTwo"
            label="Enter option 2 (required)"
            multiline
            rows={2}
            required={true}
            onChange={this._setOptions}
          />
          <PrimaryButton
            className="submit-button"
            text="Submit"
            onClick={this._saveAnswer}
            disabled={!this.state.optionOne || !this.state.optionTwo}
          />
        </div>
      </div>
    );
  }

  _setOptions = (evt, value) => {
    this.setState({ [evt.target.name]: value });
  };

  _saveAnswer = () => {
    let question = {
      author: this.props.authedUser,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    };

    this.props.dispatch(handleAddQuestion(question));
    this.props.history.push("/home");
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
