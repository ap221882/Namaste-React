import React from 'react';
import ReactDOM from 'react-dom';
const countryData = require('country-name-library');

console.log(React, 'React Global Object');
console.log(ReactDOM, 'ReactDOM Global Object');
console.log(countryData, 'countryData');

const KeysArrayReact = Object.keys(React);
const KeysArrayReactDOM = Object.keys(ReactDOM);
console.log(KeysArrayReact.length, KeysArrayReactDOM.length);
