import React, { Component } from "react";
import { connect } from "react-redux";

class PollResults extends Component {
  render() {
    let ques = this.props.question;
    let totalVotes = 0;
    if (ques)
      totalVotes = [...ques.optionOne.votes, ...ques.optionTwo.votes].length;
    return (
      <div className="poll-results">
        {ques && (
          <React.Fragment>
            <h1>Poll Results: </h1>

            <div className="option">
              <h2>{ques.optionOne.text}</h2>
              <p>
                {ques.optionOne.votes.length} / {totalVotes} People voted :
                {(ques.optionOne.votes.length * 100) / totalVotes}%
              </p>
            </div>
            <div className="option">
              <h2> {ques.optionTwo.text}</h2>
              <p>
                {ques.optionTwo.votes.length} / {totalVotes} People voted :
                {(ques.optionTwo.votes.length * 100) / totalVotes}%
              </p>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect()(PollResults);
