# QnA

### Context API vs Redux

1. Context API is a built in tool, redux comes with additional configurations and increasing the bundle size/dependency.
2. Context API is designed for static data, is combined with useState/useReducer to make it a state management tool. Though we have to do extra efforts for async reducers in case of context, redux comes with easy integrations and RTK with already having redux-thunk support of async reducers.
3. State Management Logic have to be put in UI itself in case of Context, redux have separate slices/reducers for the same.
4. Context API is not scalable as debugging is hard and we have to create new contexts every time our need is changed, redux's store is scalable without distorting other global state logic and have very nice debugging tools.
   refer : https://medium.com/@patrick.gross1987/how-to-use-the-react-context-api-with-an-asynchronous-reducer-5651c2dc26aa

### Advantage of RTK over redux?

Three principles of redux are -

1. Single Source of Truth - single store
2. State is read-only - changes are made only using actions
3. Changes are made with pure functions - reducers don't mutate state

-- Third principle make it hard to update when our slice/ reducer object is large, so RTK uses immer so that, this principle is maintained and we can also at the same time mutate state in reducers.
-- Action creators are created by their own in RTK while defining slices
-- configureStore, internally calls combine reducer to have only one rootReducer for the redux to maintain
-- API structure and naming makes you identify easily what slice contains what? Also slice have their own isolated logic and that keeps us maintaining singularity in the parts of application.

### Explain Dispatcher.

Redux store has a method of dispatch that is used to dispatch action and the function which subscribe to redux store is run again. In world of react, Provider wraps the application and we call dispatch using useDispatch hook provided by react-redux library. It takes an action object and thus make the reducer to perform some state change according to the respective action.

### Explain Reducer.

State is read-only in redux. We can update the state only using special functions that are called reducers in redux environment. Since they take as argument and prev state and action and update the state, it is like `Array.prototype.reduce` function and that's why we call them as reducers. Reducers have conditional logic where according to the different action object provided, they return the state with variations we provide. Condition is they should always be pure.

```
function reducer (state, action){
 if(action == "something"){
  return <modifiedState>
 }else if(action == "somethingElse"){
  return <modifiedOtherState>
 }
}
```

### Explain Slice

Slice is separating out the store logic of your redux application according to different features of your application and they contain all the logic according to different action collected in a single function. We genrally make separate slices in separate modules.

### Explain selector

Earlier in the redux syntax, whatever function which subscribed to store was always executed when store was dispatched with some action. Redux Toolkit integrated using react-redux in react, extends this logic to some hook we name as useSelector. It selects one part of your big store object and sunscribes to it. useSelector is invoked on every store's dispatch and it rerenders the component with new values whenever the selected value inside it is changed.

`const myRequiredState = useSelector(state => state.someSliceINeed)` updates the component i which it is invoked, whenever state of `someSliceINeed` is updated in the store.

### Explain createSlice and configuration it takes.

```
const mySlice = createSlice({
 name: "myName", // 1. added as key to this slice's state
 initialState,   // 2. initial State of this slice
 reducers : {    // 3. an object of all the conditions
  add(state)){   //    in this slice's reducer when a same named action will be dispatched
   state.count += 1;
  }
 }
})
```

REFERENCES: https://www.youtube.com/watch?v=_wVSxjk-7j4
