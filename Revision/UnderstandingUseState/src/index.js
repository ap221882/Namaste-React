//> Hooks
let componentHooks = [];
//> HookIndex
let currentHookIndex = 0;

//> How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  console.log('!!!!RENDERED');
  if (pair) {
    //~% This is not the first render, so the state pair already exists.
    //~% Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  //~# This is the first time we're rendering, so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    //~? When the user requests a state change, put the new value into the pair.
    pair[0] = nextState;
    updateDOM();
  }

  //~> >>>> Store the pair for future renders and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // Each useState() call will get the next pair.
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(100);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setReverseCount(reverseCount - 1);
  }

  return {
    handleIncrease,
    handleDecrease,
    count,
    reverseCount,
  };
}

//~% RENDERING HAPPENS WHEN WE SET THE STATE EVERY TIME
function updateDOM() {
  //~^ Reset the current Hook index before rendering the component.
  currentHookIndex = 0;
  //~* Gallery remembers the variables by the closure object
  let output = Gallery();

  //* Update the DOM to match the output.
  //* This is the part React does for you.
  increaseBtn.onclick = output.handleIncrease;
  decreaseBtn.onclick = output.handleDecrease;
  counter.textContent = output.count;
  reverseCounter.textContent = output.reverseCount;
  //>
}

let counter = document.getElementById('counter');
let increaseBtn = document.getElementById('increase');
let reverseCounter = document.getElementById('reverse-counter');
let decreaseBtn = document.getElementById('decrease');

//> Make UI match the initial state.
updateDOM();
