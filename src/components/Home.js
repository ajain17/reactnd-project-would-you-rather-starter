import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Nav";

export class Home extends Component {
  render() {
    return (
      <div className="view">
        <div className="unanswered">
          <h1>Unanswered Questions</h1>
        </div>
        <div className="answered">
          <h1>Aanswered Questions</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
