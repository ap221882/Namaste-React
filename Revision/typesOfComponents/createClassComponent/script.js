import React from 'react';
import createReactClass from 'create-react-class';

var Greeting = createReactClass({
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});

console.log(<Greeting />, 'Greeting');
