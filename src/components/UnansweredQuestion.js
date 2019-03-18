import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class UnansweredQuestion extends Component {
  render() {
    let ques = this.props.question[1];
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
        <Link to={{ pathname: `/poll/${ques.id}` }}>View Poll ></Link>
      </div>
    );
  }

  _onChange = (ev, option) => {
    console.log(option);
  };

  viewPoll = ev => {
    console.log("view poll", ev.target);
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnansweredQuestion);
