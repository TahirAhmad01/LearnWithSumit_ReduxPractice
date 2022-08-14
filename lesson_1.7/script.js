const counters = document.getElementById("counters");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

//action indentifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
function increment(val) {
  return { type: INCREMENT, payload: val };
}

function decrement(val) {
  return { type: DECREMENT, payload: val };
}

//initial state
const initialState = {
  value: 0,
};

//Reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

//create store
const store = Redux.createStore(counterReducer);

//subscribe store
const render = () => {
  const state = store.getState();
  counters.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

//button click events
incrementBtn.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
