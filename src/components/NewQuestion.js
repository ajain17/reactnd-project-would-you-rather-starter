import React, { Component } from "react";
import { connect } from "react-redux";

export class NewQuestion extends Component {
  render() {
    return <div>New Question</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
