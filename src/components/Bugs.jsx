import React, { Component } from "react";
import StoreContext from "../contexts/storeContext";

class Bugs extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log(this.context);
  }
  //   state = {};
  render() {
    return <div>Bugs</div>;
  }
}

export default Bugs;
