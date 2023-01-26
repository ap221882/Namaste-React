import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import ReactDOMTestUtils from 'react-dom/test-utils';
import ReactDOMServerBrowser from 'react-dom/server.browser';
// import ReactDOMNode from 'react-dom/server.node';
import ReactDOMProfiling from 'react-dom/profiling';

console.log(React, 'React ');
console.log(ReactDOM, 'React DOM');
// console.log(ReactDOMClient, 'React DOM Client');
// console.log(ReactDOMServer, 'React DOM Server');
// console.log(ReactDOMTestUtils, 'ReactDOM DOM Test Utilities');
// console.table(ReactDOM.createRoot);
// console.table(ReactDOMClient.createRoot);
// console.log(ReactDOMServerBrowser, 'ReactDOMServerBrowser');
// console.log(ReactDOMProfiling, 'ReactDOMProfiling');
// console.log(ReactDOMNode, 'ReactDOMNode');

const KeysArrayReact = Object.keys(React);
const KeysArrayReactDOM = Object.keys(ReactDOM);
console.log(KeysArrayReact.length, KeysArrayReactDOM.length);
