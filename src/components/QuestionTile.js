import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export default class QuestionTile extends Component {
  render() {
    let questions = this.props.questions;
    return (
      <div className="question-list flex center wrap">
        {questions &&
          questions.map(ques => (
            <div className="question-tile" key={ques.id}>
              <div className="question">
                <h2>{ques.author} Asks: </h2>
                <hr />
                <div className="options">
                  <h3>Would you rather?</h3>
                  <ul>
                    <li>{ques.optionOne.text}</li>
                    <li>{ques.optionTwo.text}</li>
                  </ul>
                </div>
                <hr />
                <Link
                  to={{
                    pathname: `/question/${ques.id}/${this.props.answered}`
                  }}
                >
                  View Poll >
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
