import React, { Component } from "react";
import { loadBugs } from "../store/bugs";
import { connect } from "react-redux";
class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProp = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProp = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});
export default connect(mapStateToProp, mapDispatchToProp)(Bugs);
