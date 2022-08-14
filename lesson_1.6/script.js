const counters = document.getElementById("counters");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

//initial state
const initialState = {
  value: 0,
};

//Reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: "increment",
  });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
