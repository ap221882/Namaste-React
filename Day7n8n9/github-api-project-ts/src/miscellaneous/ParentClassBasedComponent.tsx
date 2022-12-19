import React, { Component } from "react";

import ClassBasedComponent2 from "./ChildClassBasedComponent";

type Props = {};

type State = {};

/**
 * * Child first renders fully and its componentDidMount is called since it is rendered fully but not the parent.
 * * After rendering of child, parent is rendered, hence its componentDidMount is called next
 */

/**
 * * Three react component lifecycles are -
 * * 1. Mounting - cycle ends with componentDidMount
 * * 2. Updating - cycle ends with componentDidUpdate
 * * 3. Unmounting - cycle ends with componentWillUnmount
 */

class ParentClassBasedComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    console.log("Parent- constructor");
  }

  componentDidMount(): void {
    console.log("Parent- didMount");
  }
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    console.log("Parent- didUpdate");
    /**
     * if(prevProps.company !== this.props.company){
     *   DO THIS
     * }
     * if(prevProps.data !== this.props.data){
     *   DO THIS
     * }
     */
  }

  render() {
    //having 1000 lines of element
    console.log("Parent- render");
    return (
      <div>
        <ClassBasedComponent2 />
      </div>
    );
  }
}

export default ParentClassBasedComponent;

// tsrce
