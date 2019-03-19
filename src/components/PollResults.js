import React, { Component } from "react";
import { connect } from "react-redux";

const PollResults = props => {
  let ques = props.question;
  let user = props.user;
  let totalVotes = 0;
  if (ques) {
    totalVotes = [...ques.optionOne.votes, ...ques.optionTwo.votes].length;
  }
  return (
    <div className="poll-results">
      {ques && (
        <React.Fragment>
          <h1>Poll Results: </h1>

          <div className="option">
            <h2>
              {ques.optionOne.text}
              {ques.optionOne.votes.includes(user) && (
                <i className="fas fa-check-circle" />
              )}
            </h2>
            <p>
              {ques.optionOne.votes.length} / {totalVotes} People voted :
              {(ques.optionOne.votes.length * 100) / totalVotes}%
            </p>
          </div>
          <div className="option">
            <h2>
              {ques.optionTwo.text}
              {ques.optionTwo.votes.includes(user) && (
                <i className="fas fa-check-circle" />
              )}
            </h2>
            <p>
              {ques.optionTwo.votes.length} / {totalVotes} People voted :
              {(ques.optionTwo.votes.length * 100) / totalVotes}%
            </p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PollResults;
