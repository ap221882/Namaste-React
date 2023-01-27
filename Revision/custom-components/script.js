// const elementNotDefined = document.createElement('ajay-pathak');
// document.body.appendChild(elementNotDefined);

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    //% Element created
    console.log('I am created -  constructor');
  }

  connectedCallback() {
    //% Element connected
    console.log('I am mounted - connected');
  }

  disconnectedCallback() {
    console.log('I am removed- disconnected');
  }
}

customElements.define('ajay-pathak', MyCustomElement);

const element = document.getElementsByTagName('ajay-pathak');
console.log(element);
// element[0].remove();
