import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class UnansweredQuestion extends Component {
  render() {
    let ques = this.props.question;
    return (
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
        <Link to={{ pathname: `/poll/${ques.id}/false` }}>View Poll ></Link>
      </div>
    );
  }
}

export default connect()(UnansweredQuestion);
