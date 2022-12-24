import React, { Component } from "react";

type Props = {};

type State = {};

class ChildClassBasedComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    console.log("Child- constructor");
  }

  componentDidMount(): void {
    console.log("Child- didMount");
  }

  render() {
    console.log("Child- render");
    return <></>;
  }
}

export default ChildClassBasedComponent;
