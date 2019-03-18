import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export default class QuestionTile extends Component {
  render() {
    let questions = this.props.questions;
    return (
      <ul>
        {questions &&
          questions.map(ques => (
            <li key={ques.id}>
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
                  to={{ pathname: `/poll/${ques.id}/${this.props.answered}` }}
                >
                  View Poll >
                </Link>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}
