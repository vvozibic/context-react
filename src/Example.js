import React, { Component } from "react";
import { withContext } from "../providers";

class Example extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <div>{this.props.data.map(item => <div>{item}</div>)}</div>;
  }
}

export default withContext("My")(Example);
